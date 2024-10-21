import React, { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

export function RegisterPage() {

  const { register } = useContext(AuthContext)
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }


  const onSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = form    
    const response = await register({ username, email, password, confirmPassword })
    if (response.ok) {
      toast.success('Usuario creado con éxito, puedes iniciar sesión')
    } else {
      navigate('/auth/register', { replace: true })
      toast.error(`Error: ${response.error}`)
    }
  }


  return (
    <div>
      <Toaster />
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img className="w-8 h-8 mr-2" src="/icono-wonders-from-el-salvador.svg" alt="WFES Logo" />
            Wonders from El Salvador
          </a>
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Crear una cuenta
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">Tu nombre de usuario</label>
                  <input type="email" name="username" id="username" value={form.username} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="name_example" required="" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Tu correo</label>
                  <input type="email" name="email" id="email" value={form.email} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label>
                  <input type="password" name="password" id="password" placeholder="••••••••••••••••" value={form.password} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2." required="" />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 ">Confirmar contraseña</label>
                  <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••••••••••" value={form.confirmPassword} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required="" />
                </div>
                <div onClick={onSubmit} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Crear una cuenta</div>
                <p className="text-sm font-light text-gray-500">
                  ¿Ya tienes una cuenta? <a href="/auth/login" className="font-medium text-blue-600 hover:underline">Inicia sesión aquí</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
