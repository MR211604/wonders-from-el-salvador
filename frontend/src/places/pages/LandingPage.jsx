import { useEffect, useState } from "react"
import { NavBar } from "../../ui"
import { SLIDES } from "../constants/slides"
import { Carrousel, PlaceCard } from "../index";

export function LandingPage() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/api/places/getPlaces?page=1&limit=10')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className='bg-white'>

      <NavBar />

      <Carrousel slides={SLIDES} />

      <div className='pt-10 flex flex-col items-center justify-content'>
        <h2 className='text-2xl font-bold text-black'>¡Descubre nuestro pais a traves de sus maravillas!</h2>
        <div className="py-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {
            //TODO: Optimizar las imagenes
            data?.places.map(place => (
              <PlaceCard key={place.id} {...place} />
            ))
          }
        </div>
      </div>

    </div>
  )
}
