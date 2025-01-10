import { useContext, useEffect, useState } from "react";
import { TbMapSearch } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../auth/provider/AuthProvider";
import { fetchWithToken } from "../../helpers/fetch";
import { snakeToNormal } from "../../helpers/snakeToNormal";
import { NavBar } from "../../ui";
import { StarComponent } from "../components/StarComponent";


export function PlacePage() {
  const { auth } = useContext(AuthContext)
  const { place_id } = useParams();

  
  const [placeData, setPlaceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [editRatingId, setEditRatingId] = useState(null);
  
  //Rating promedio general
  const averageRating = placeData?.user_ratings?.reduce((sum, rating) => sum + rating.rating, 0) / placeData?.user_ratings?.length;
  const avgRating = (averageRating % 1) >= 0.6 ? Math.ceil(averageRating) : Math.floor(averageRating);
  
  const [editComment, setEditComment] = useState(undefined)
  const [editRating, setEditRating] = useState(0)

  
  useEffect(() => {
    const fetchPlaceById = async () => {
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
    fetchPlaceById()
  }, [place_id, editRatingId])


  if (loading) {
    return <h1>Cargando...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  const handleComment = (e) => {
    setEditComment(e.target.value)
  }

  const handleRatingChange = (newRating) => {
    setEditRating(newRating)
  }

  const handleRating = async ({ id, user_id, place_id, rating, comment }) => {
    if (editRatingId === id) {
      try {
        await fetchWithToken('reviews/createReview', { placeId: place_id, userId: user_id, rating: editRating > 0 ? editRating : rating, comment: editComment ? editComment : comment }, 'POST')
        setEditRatingId(null)
        setEditComment(undefined)
      } catch (error) {
        setError(error)
      }
    } 
    else {
      setEditRatingId(id)
    }
  }

  return (
    <>
      <NavBar />

      <div className="animate__animated animate__fadeIn">
        <div className="flex sm:flex-col sm:justify-center lg:flex-row m-10">
          <img className="lg:w-[480px] lg:h-[240px] sm:h-[2/3] sm:w-[2/3] object-fit" src={`/images/places/${placeData.name}.jpg`} alt="" />
          <div className="w-full justify-center place-content-center sm:mt-10 lg:mt-0 lg:ml-12">
            <div className="flex flex-row items-center"> <StarComponent interactive={false} rating={avgRating} /> <span className="ml-2">{`(${placeData?.user_ratings?.length})`}</span>  </div>
            <h1 className="lg: ml-5 sm:ml-0 font-bold text-xl">{snakeToNormal(placeData.name)}, {placeData.city}</h1>
            <h2 className="mt-2">{placeData.description}</h2>
            <h2 className="font-bold mt-6"><span className="text-2xl">Costo: ${placeData.min_price} a ${placeData.max_price}</span></h2>
            <div className="mt-2">
              <a className="text-md font-bold text-blue-500 hover:text-blue-800" href={placeData.location}> Ver en mapa
                <TbMapSearch className="align-middle w-6 h-6 inline-block ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="py-3 flex flex-col m-10">
          <div>
            <h1 className="text-2xl font-bold">Comentarios y valoraciones</h1>
            {
              placeData.user_ratings
                .sort((a, b) => {
                  if (auth.id) {
                    if (a.user_id === auth.id && b.user_id !== auth.id) return -1;
                    if (a.user_id !== auth.id && b.user_id === auth.id) return 1;
                  }
                  return 0;
                })
                .map((rating, index) => (
                  <div key={index} className="flex flex-row my-4 text-left">
                    <span className="font-bold">{`${auth.name === rating.user.name ? `(Tú) ${rating.user.name}` : rating.user.name}`}:
                      <h2 className="font-normal">{rating.comment}</h2>
                      <StarComponent interactive={editRatingId === rating.id} rating={rating.rating} editRating={editRating} comment={rating.comment} editComment={editComment} handleRating={handleRatingChange} handleComment={handleComment} /> </span>
                    {
                      auth && auth.name === rating.user.name &&
                      <a className="text-teal-700 hover:underline cursor-pointer" onClick={() => handleRating(rating)}>  
                        {rating.id === editRatingId ? `Realizar cambios` : `Editar valoración`}
                      </a>
                    }
                  </div>
                ))
            }
          </div>
          <div className="flex items-center my-3">
            <img className="rounded-full w-[120px] h-[120px] aspect-[2/2]" src="/images/directions.jpg" alt="como llegar - img" />
            <h2 className="ml-5 font-bold">Como llegar: <span className="font-normal">{placeData.place_details[0].direction}</span></h2>
          </div>

          <div className="flex items-center my-3">
            <img className="rounded-full w-[120px] h-[120px] aspect-[2/2]" src="/images/best_season_to_go.jpg" alt="mejor epoca para llegar - img" />
            <h2 className="ml-5 font-bold">Mejor epoca para visitar: <span className="font-normal">{placeData.place_details[0].best_time}</span> </h2>
          </div>

          <div className="flex items-center my-3">
            <img className="rounded-full w-[120px] h-[120px] aspect-[2/2]" src="/images/where_to_stay.jpg" alt="donde hospedarse - img" />
            <h2 className="ml-5 font-bold">Donde hospedarse: <span className="font-normal">{placeData.place_details[0].where_to_stay}</span> </h2>
          </div>

          <div className="flex items-center my-3">
            <img className="rounded-full w-[120px] h-[120px] aspect-[2/2]" src="/images/where_to_eat.jpg" alt="donde hospedarse - img" />
            <h2 className="ml-5 font-bold">Donde comer: <span className="font-normal"> {placeData.place_details[0].where_to_eat}</span></h2>

          </div>

          <div className="flex items-center my-3">
            <img className="rounded-full w-[120px] h-[120px] aspect-[2/2]" src="/images/security_tips.jpg" alt="donde hospedarse - img" />
            <h2 className="ml-5 font-bold">Consejos de seguridad: <span className="font-normal">{placeData.place_details[0].safety_tips}</span> </h2>

          </div>
        </div>
      </div>

    </>
  )
}