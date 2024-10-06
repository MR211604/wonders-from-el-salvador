import { useEffect, useState } from 'react'

export function TestComponent() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/api/places/getPlaces')
      .then(response => response.json())
      .then(data => setData(data))
  }, [data])

  return (
    <div>
      {data?.places.map(place => (
        <>
          <div>
            <h2>{place.name}</h2>
            <img className='w-full h-[520px]' src={`/images/places/${place.name}.jpg`} alt={place.name} />
          </div>
        </>
      ))}
    </div>
  )
}
