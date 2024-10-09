import { useEffect, useState } from "react"
import { NavBar } from "../../ui"
import { SLIDES } from "../constants/slides"
import { Carrousel, PlaceCard } from "../index";
import { PaginationButtons } from "../components/PaginationButtons";
import { useFetchPlaces } from "../hooks/useFetchPlaces";

export function LandingPage() {

  const { setCurrentPage, currentPage, loading, places, pages } = useFetchPlaces();

  return (
    <div className='bg-white'>

      <NavBar />

      <Carrousel slides={SLIDES} />

      <div className='pt-10 flex flex-col items-center justify-content'>
        <h2 className='text-2xl font-bold text-black'>¡Descubre nuestro pais a traves de sus maravillas!</h2>
        <div className="max-w-screen-lg py-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {
            loading ? <p>Cargando...</p> :
              places.map(place => (
                <PlaceCard key={place.id} {...place} />
              ))
          }

        </div>

        <PaginationButtons setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={pages} />
      </div>

    </div>
  )
}
