import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { snakeToNormal } from "../../helpers/snakeToNormal";
import { TbMapSearch } from "react-icons/tb";
import { NavBar } from "../../ui";


export function PlacePage() {
  //Luego cambiaremos esto con useQuery
  const [placeData, setPlaceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const { place_id } = useParams();

  useMemo(() => {
    const fetchHeroById = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/places/getPlaceById/${place_id}`);
        const data = await response.json();
        if (!data.ok) {
          setError(data.msg)
        }
        setPlaceData(data.place)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchHeroById()
  }, [place_id])


  if (loading) {
    return <h1>Cargando...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }


  return (
    <>

      <NavBar />

      <div className="flex sm:flex-col sm:justify-center lg:flex-row m-10">
        <img className="lg:w-[480px] lg:h-[240px] sm:h-[2/3] sm:w-[2/3] object-fit" src={`/images/places/${placeData.name}.jpg`} alt="" />
        <div className="w-full justify-center place-content-center sm:mt-10 lg:mt-0 lg:ml-12">
          <h1 className="font-bold text-xl">{snakeToNormal(placeData.name)}, {placeData.city}</h1>
          <h2 className="mt-2">{placeData.description}</h2>
          <h2 className="font-bold mt-6"><span className="text-2xl">Costo: ${placeData.min_price} a ${placeData.max_price}</span></h2>
          <div className="mt-2">
            <a className="text-md font-bold text-blue-500 hover:text-blue-800" href={placeData.location}> Ver en mapa
              <TbMapSearch className="align-middle w-6 h-6 inline-block ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="py-3 grid grid-rows-5 gap-2 m-10">
        <h2 className="font-bold">Como llegar: <span className="font-normal">{placeData.place_details.direction}</span></h2>

        <h2 className="font-bold">Mejor epoca para visitar: <span className="font-normal">{placeData.place_details.best_time}</span> </h2>

        <h2 className="font-bold">Donde hospedarse: <span className="font-normal">{placeData.place_details.where_to_stay}</span> </h2>

        <h2 className="font-bold">Donde comer: <span className="font-normal"> {placeData.place_details.where_to_eat}</span></h2>

        <h2 className="font-bold">Consejos de seguridad: <span className="font-normal">{placeData.place_details.safety_tips}</span> </h2>
      </div>
    </>
  )
}
