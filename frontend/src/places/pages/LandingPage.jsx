import { Footer, NavBar } from "../../ui"
import { SLIDES, CITIES } from "../constants/slides"
import { Carrousel, Loading, PlaceCard } from "../index";
import { PaginationButtons } from "../components/PaginationButtons";
import { useFetchPlaces } from "../hooks/useFetchPlaces";
import Select from 'react-select'
import { Toaster } from 'react-hot-toast'

export function LandingPage() {

  const { setCurrentPage, currentPage, loading, places, pages, search, setSearch, setCity } = useFetchPlaces();

  const onChangeSearchInput = (e) => {
    setSearch(e.target.value)
  }

  const onChangeSelect = (e) => {
    setCity(e.value)
  }

  return (
    <div className='bg-white'>
      <Toaster />

      <NavBar />

      <Carrousel slides={SLIDES} />

      <div className='pt-10 flex flex-col items-center justify-content'>
        <h2 className='text-2xl font-bold text-black'>¡Descubre nuestro pais a traves de sus maravillas! </h2>

        <div className="max-w-screen-lg w-full flex">
          <div className="flex-row m-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Busca tu lugar:</label>
            <input type="email" value={search} onChange={onChangeSearchInput} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Search" required="" />
          </div>
          <div className="w-full flex-row m-6 justify-center items-center">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Filtra por ciudad:</label>
            <Select options={CITIES} onChange={onChangeSelect} />
          </div>
        </div>

        <div className={`animate__animated animate__fadeInLeft max-w-screen-lg py-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3`}
          style={loading ? { gridTemplateColumns: 'none' } : {}}>

          {
            loading ? <Loading /> :
              places.map(place => (
                <PlaceCard key={place.id} {...place} />
              ))
          }

        </div>

        <PaginationButtons setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={pages} />
      </div>

      <Footer />

    </div>
  )
}
