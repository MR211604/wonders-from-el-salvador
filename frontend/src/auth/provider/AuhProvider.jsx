import { createContext, useCallback, useState } from "react";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";

const initialState = {
  id: null,
  cheking: true,
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
        cheking: false,
        logged: true,
        name: response.user.username,
        emai: response.user.email
      })
      return response
    }
  }

  const register = async ({ name, email, password }) => {
    const response = await fetchWithoutToken('auth/register', { name, email, password }, 'POST')
    if (response.ok) {
      localStorage.setItem('token', response.token)
      setAuth({
        id: response.user.id,
        cheking: false,
        logged: true,
        name: response.user.name,
        email: response.user.email
      })
      return true
    }
    return response
  }

  const fetchUserData = useCallback(async () => {
    const response = await fetch('http://localhost:3000/api/auth/success', {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      }
    })
    if (!response.ok) {
      console.log('No se pudo obtener la información del usuario')
    }
    const data = await response.json()
    localStorage.setItem('token', data.token)
    setAuth({
      id: data.user.id,
      cheking: false,
      logged: true,
      name: data.user.displayName,
      email: data.user.email
    })
  }, [])

  const verifyToken = useCallback(async () => {

    const token = localStorage.getItem('token')
    if (!token) {
      setAuth({
        id: null,
        cheking: false,
        logged: false,
        name: null,
        email: null,
      })
      return false
    }
    const response = await fetchWithToken('auth/renew')
    if (response.ok) {
      localStorage.setItem('token', response.token)
      setAuth({
        id: response.user.id,
        cheking: false,
        logged: true,
        name: response.user.name,
        email: response.user.email
      })
      return true
    } else {
      setAuth({
        id: null,
        cheking: false,
        logged: false,
        name: null,
        email: null,
      })
      return false
    }
  }, [])

  const logout = async () => {
    localStorage.removeItem('token')
    const response = await fetchWithToken('auth/logout')
    if(!response.ok) { console.log('Ocurrio un error al intentar cerrar sesion') }
    setAuth({
      id: null,
      cheking: false,
      logged: false,
      name: null,
      email: null,
    })
  }

  return (
    <AuthContext.Provider value={{
      login, register, logout, verifyToken, loginWithGoogle, fetchUserData, auth
    }}>
      {children}
    </AuthContext.Provider>
  )


}
