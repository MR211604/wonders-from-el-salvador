import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/provider/AuhProvider";

export const NavBar = () => {

  const { auth, logout } = useContext(AuthContext)

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/auth/login');
  }

  const onRegister = () => {
    navigate('/auth/register');
  }

  const onLogout = () => {
    logout();
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Optional: Add smooth scrolling effect
    });
  }

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 relative w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/icono-wonders-from-el-salvador.svg" className="h-8" alt="WFES Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden lg:block">Wonders from El Salvador</span>
          </a>
          <div className="flex md:order-2 space-x-4 md:space-x-2 rtl:space-x-reverse">
            {
              !auth.logged ? (
                <>
                  <button
                    onClick={onLogin}
                    type="button"
                    className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300 ease-in-out"
                  >
                    Iniciar sesión
                  </button>

                  <button onClick={onRegister} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300 ease-in-out">Registrarse</button>
                </>
              ) :
                <>
                  <h1 className="flex mt-1 mr-2 text-xl">{auth.name}</h1>
                  <button onClick={onLogout} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 transition duration-300 ease-in-out">Cerrar sesion</button>
                </>
            }

            {/* Parte del expand responsive */}
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">

              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>

          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Inicio</a>
              </li>
              <li>
                <a onClick={scrollToBottom} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">Acerca de</a>
              </li>
              <li>
                <a onClick={scrollToBottom} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
