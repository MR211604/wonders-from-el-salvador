export function LoginPage() {
  return (
    <section className="h-screen bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <img className="w-8 h-8 mr-2" src="/icono-wonders-from-el-salvador.svg" alt="WFES Logo" />
          Wonders from El Salvador
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              ¡Bienvenido de nuevo!
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Tu correo</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required="" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 " required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="remember" className="text-gray-500 ">Recordar en este sitio</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline ">¿Olvidaste tu contraseña?</a>
              </div>

              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Iniciar sesión</button>

              <button type="submit" className="w-full text-black bg-slate-50 hover:bg-slate-100 focus:ring-4 focus:outline-none border focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  border-gray-300 flex items-center place-content-evenly">

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                Iniciar sesión con Google



              </button>


              <p className="text-sm font-light text-gray-500">
                ¿Aún no tienes una cuenta? <a href="#" className="font-medium text-blue-600 hover:underline">Regístrate aquí</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
