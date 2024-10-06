import { NavBar } from "../../ui"
import { Carrousel } from "../components/Carrousel"
import { SLIDES } from "../constants/slides"

export const LandingPage = () => {

  return (
    <div className='bg-white'>

      <NavBar />

      <Carrousel slides={SLIDES} />

      {/* Aqui tiene que ir el grid para las tarjetas */}

      <div className='pt-10 flex flex-col items-center justify-content'>
        <h2 className='text-2xl font-bold text-black'>Descubre nuestro pais a traves de sus maravillas</h2>
        <div className="py-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Aqui tiene que ir el map de la data */}

          <div className="p-3 rounded-lg shadow-md">
            <img className="object-cover aspect-[2/2] rounded-lg" src="images/la_libertad.jpg" alt="" />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-black">Bojack Horseman</h3>
              <p className="mt-1 text-sm text-gray-400">Un antiguo actor de televisión lucha con la depresión y sus errores
                pasados mientras busca redención en un mundo antropomórfico.</p>
            </div>
          </div>
          <div className="p-3 rounded-lg shadow-md">
            <img className="object-cover aspect-[2/2] rounded-lg" src="images/la_libertad.jpg" alt="" />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-black">Bojack Horseman</h3>
              <p className="mt-1 text-sm text-gray-400">Un antiguo actor de televisión lucha con la depresión y sus errores
                pasados mientras busca redención en un mundo antropomórfico.</p>
            </div>
          </div>
          <div className="p-3 rounded-lg shadow-md">
            <img className="object-cover aspect-[2/2] rounded-lg" src="images/la_libertad.jpg" alt="" />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-black">Bojack Horseman</h3>
              <p className="mt-1 text-sm text-gray-400">Un antiguo actor de televisión lucha con la depresión y sus errores
                pasados mientras busca redención en un mundo antropomórfico.</p>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}
