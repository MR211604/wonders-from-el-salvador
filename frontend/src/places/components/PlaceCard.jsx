import { snakeToNormal } from "../../helpers/snakeToNormal";
import { StarComponent } from "./StarComponent";

export function PlaceCard({ id, name, city, user_ratings, description }) {

  const averageRating = user_ratings?.reduce((sum, rating) => sum + rating.rating, 0) / user_ratings?.length;
  const avgRating = (averageRating % 1) >= 0.6 ? Math.ceil(averageRating) : Math.floor(averageRating);

  return (
    <>
      <div className="p-3 rounded-lg shadow-md">
        <img className="object-cover aspect-[2/2] rounded-lg" src={`/images/places/${name}.jpg`} alt="" />
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-black">
            <a href={`/place/${id}`}>{city}, {snakeToNormal(name)}</a></h3>
          <p className="mt-1 text-sm text-gray-400">{description}</p>
        </div>
        <StarComponent rating={avgRating} />
      </div>
    </>
  )
}
