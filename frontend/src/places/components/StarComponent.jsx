import { FaStar } from "react-icons/fa";

export function StarComponent({ user_ratings }) {

  const averageRating = user_ratings.reduce((sum, rating) => sum + rating.rating, 0) / user_ratings.length;
  const roundedRating = (averageRating % 1) >= 0.6 ? Math.ceil(averageRating) : Math.floor(averageRating);

  return (
    <div className="flex flex-row my-4 text-center space-x-3 ">
      <span className="font-bold mr-2">Valoracion: </span>
      {
        Array.from({ length: 5 }, (_, index) => (
          <FaStar className="my-1" key={index} color={index < roundedRating ? '#e8e23f' : 'gray'} />
        ))
      }      
    </div>
  )
}
