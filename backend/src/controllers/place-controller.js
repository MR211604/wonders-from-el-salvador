import { PlaceRepository } from '../repositories/place-repository.js'

export async function getPlaces (req, res) {
  try {
    const { page, limit, place, searchPlace } = req.query
    if (!page || !limit) {
      return res.status(400).json({ ok: false, msg: 'No has proporcionado una pagina o un limite de esta' })
    }
    const offset = Number((page - 1) * limit)
    const [data, totalPageData] = await PlaceRepository.getPlaces(Number(offset), Number(limit), place, searchPlace)
    const totalPage = Math.ceil(Number(totalPageData) / Number(limit))

    return res.status(200).json({
      ok: true,
      places: data,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        totalPage
      }
    })
  } catch (error) {
    console.log('error: ', error)
    return res.status(500).send({ ok: false, error: 'Error interno' })
  }
}

export async function getPlaceById (req, res) {
  try {
    const { id } = req.params
    const [place] = await PlaceRepository.getPlace(id)
    if (place.length === 0) {
      return res.status(404).json({ ok: false, msg: 'Lugar no encontrado' })
    }
    return res.status(200).json({ ok: true, place })
  } catch (error) {
    console.log('error: ', error)
    return res.status(500).send({ ok: false, error: 'Error interno' })
  }
}
