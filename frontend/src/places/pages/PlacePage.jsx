import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { snakeToNormal } from "../../helpers/snakeToNormal";


export function PlacePage() {
  //Luego cambiaremos esto con useQuery
  const [placeData, setPlaceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const { place_id } = useParams();
  const navigate = useNavigate();


  useMemo(() => {
    const fetchHeroById = async () => {
      try {
        //Esta api tiene que cambiarse a la nueva que trae toda la info del placeID
        const response = await fetch(`http://localhost:3000/api/places/getPlaceById/${place_id}`);
        const data = await response.json();
        console.log('data', data)
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
      <h1>{placeData.city}</h1>
      <h1>{snakeToNormal(placeData.name)}</h1>
      <img src={`/images/places/${placeData.name}.jpg`} />
    </>
  )
}
