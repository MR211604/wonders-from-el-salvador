import { useEffect, useState } from "react"

export function useFetchPlaces() {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState();
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/places/getPlaces?page=${currentPage}&limit=6`);
      const data = await response.json();
      if (data.places.length === 0) {
        setError('No hay lugares disponibles')
      }
      setPlaces(data.places);
      setPages(data.pagination.totalPage);
      setLoading(false);
    }
    fetchData()
  }, [currentPage])

  return {
    loading,
    places,
    pages,
    error,
    currentPage,
    setCurrentPage
  }
}