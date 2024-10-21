import { createContext, useCallback, useState } from "react";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";

const initialState = {
  id: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
}

export const AuthContext = createContext({})

export function AuthProvider({ children }) {

  const [auth, setAuth] = useState(initialState)

  const loginWithGoogle = async () => {

    window.open('http://localhost:3000/api/auth/google', '_self')

  }

  const login = async ({ email, password }) => {
    const response = await fetchWithoutToken('auth/login', { email, password }, 'POST')
    if (response.ok) {
      localStorage.setItem('token', response.token)
      setAuth({
        id: response.user.id,
        checking: false,
        logged: true,
        name: response.user.displayName,
        emai: response.user.email
      })
    }
    return response
  }

  const register = async ({ username, email, password, confirmPassword }) => {
    const response = await fetchWithoutToken('auth/register', { username, email, password, confirmPassword }, 'POST')
    return response
  }

  const fetchUserData = useCallback(async () => {

    const token = localStorage.getItem('token')

    const response = await fetch('http://localhost:3000/api/auth/success', {
      method: "GET",
      credentials: "include",
      headers: {
        'x-token': token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      }
    })    
    
    const data = await response.json()
    if (!data.ok) {
      setAuth({
        id: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      })
      return false
    }
    localStorage.setItem('token', data.token)
    setAuth({
      id: data.user.id,
      checking: false,
      logged: true,
      name: data.user.displayName,
      email: data.user.email
    })
  }, [])


  const logout = async () => {
    localStorage.removeItem('token')
    const response = await fetchWithToken('auth/logout')
    if (!response.ok) { console.log('Ocurrio un error al intentar cerrar sesion') }
    setAuth({
      id: null,
      checking: false,
      logged: false,
      name: null,
      email: null,
    })
  }

  return (
    <AuthContext.Provider value={{
      login, register, logout, loginWithGoogle, fetchUserData, auth
    }}>
      {children}
    </AuthContext.Provider>
  )


}
