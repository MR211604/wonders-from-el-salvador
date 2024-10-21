import { useState } from "react";
import { FaStar } from "react-icons/fa";

export function StarComponent({ rating, editRating, comment, editComment, interactive, handleRating, handleComment }) {

  const [hover, setHover] = useState()

  return (
    <div className="flex flex-row my-4 text-center space-x-3 ">
      <span className="font-bold mr-2">Valoracion: </span>
      {
        interactive ?
          (
            <>
              {
                Array.from({ length: 5 }, (_, index) => {
                  const currentRating = index + 1
                  return (
                    <div key={index}>
                      <label>
                        <input style={{ display: "none" }} type="radio" name="rating" value={editRating ? editRating : rating} onChange={() => handleRating(currentRating)} />
                        <FaStar
                          className="my-1"
                          style={{ cursor: 'pointer' }}
                          key={index} color={currentRating <= (hover || (editRating ? editRating : rating)) ? '#ffc107' : '#e4e5e9'} onMouseEnter={() => setHover(currentRating)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>

                    </div>
                  )
                })
              }
              <div className="flex flex-col">
                <h2>Deja tu comentario</h2>
                <textarea className="font-normal" name="comment" onChange={handleComment} value={editComment !== undefined ? editComment : comment} rows={4} cols={40} />
              </div>
            </>
          ) :
          (
            <>
              {
                Array.from({ length: 5 }, (_, index) => (
                  <FaStar className="my-1" key={index} color={index < rating ? '#ffc107' : '#e4e5e9'} />
                ))
              }
            </>
          )
      }
    </div>
  )
}
