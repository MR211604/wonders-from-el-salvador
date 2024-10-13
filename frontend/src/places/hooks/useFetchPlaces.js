import { useEffect, useState } from "react"

export function useFetchPlaces() {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState();
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState();
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:3000/api/places/getPlaces?page=${currentPage}&limit=6&place=${city}&searchPlace=${search}`);
          const data = await response.json();
          if (data.places.length === 0) {
            setError('No hay lugares disponibles')
          }
          setPlaces(data.places);
          setPages(data.pagination.totalPage);
        } catch (error) {
          setError('Error al obtener los datos')
        } finally {
          setLoading(false)
        }
      }
      fetchData()
    }, 350)
    return () => clearTimeout(handler)
  }, [currentPage, search, city])

  useEffect(() => {
    setCurrentPage(1)
  }, [city, search])

  return {
    loading,
    places,
    pages,
    error,
    currentPage,
    search,
    setCurrentPage,
    setSearch,
    setCity
  }
}