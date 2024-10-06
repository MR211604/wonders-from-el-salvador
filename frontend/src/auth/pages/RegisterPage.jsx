import React from 'react'

export function RegisterPage() {
  return (
    <section class="bg-gray-50 ">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img class="w-8 h-8 mr-2" src="/icono-wonders-from-el-salvador.svg" alt="WFES Logo" />
          Wonders from El Salvador
        </a>
        <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Crear una cuenta
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Tu correo</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2." required="" />
              </div>
              <div>
                <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirmar contraseña</label>
                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required="" />
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required="" />
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-light text-gray-500 ">Acepto los <a class="font-medium text-blue-600 hover:underline" href="#">Términos y Condiciones</a></label>
                </div>
              </div>
              <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Crear una cuenta</button>
              <p class="text-sm font-light text-gray-500">
                ¿Ya tienes una cuenta? <a href="#" class="font-medium text-blue-600 hover:underline">Inicia sesión aquí</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
