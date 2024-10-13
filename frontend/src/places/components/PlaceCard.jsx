import { snakeToNormal } from "../../helpers/snakeToNormal";
import { StarComponent } from "./StarComponent";

export function PlaceCard({ id, name, city, user_ratings, description }) {

  return (
    <>
      <div className="p-3 rounded-lg shadow-md">
        <img className="object-cover aspect-[2/2] rounded-lg" src={`/images/places/${name}.jpg`} alt="" />
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-black">
            <a href={`/place/${id}`}>{city}, {snakeToNormal(name)}</a></h3>
          <p className="mt-1 text-sm text-gray-400">{description}</p>
        </div>
        <StarComponent user_ratings={user_ratings} />
      </div>
    </>
  )
}
