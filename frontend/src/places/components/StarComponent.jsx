import { FaStar } from "react-icons/fa";

export function StarComponent({ rating }) {

  return (
    <div className="flex flex-row my-4 text-center space-x-3 ">
      <span className="font-bold mr-2">Valoracion: </span>
      {
        Array.from({ length: 5 }, (_, index) => (
          <FaStar className="my-1" key={index} color={index < rating ? '#e8e23f' : 'gray'} />
        ))
      }      
    </div>
  )
}
