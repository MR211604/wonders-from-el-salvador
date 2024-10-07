import { snakeToNormal } from "../../helpers/snakeToNormal";

export function PlaceCard({ id, name, city, country, description }) {

  return (
    <>
      <div className="p-3 rounded-lg shadow-md">
        <img className="object-cover aspect-[2/2] rounded-lg" src={`/images/places/${name}.jpg`} alt="" />
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-black">
            <a href={`/place/${id}`}>{city}, {snakeToNormal(name)}</a></h3>
          <p className="mt-1 text-sm text-gray-400">{description}</p>
        </div >
      </div >
    </>
  )
}
