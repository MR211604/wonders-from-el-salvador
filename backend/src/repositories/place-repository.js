import { Op } from 'sequelize'
import { connection } from '../database/db-connection.js'
import initModels from '../database/models/init-models.js'

const { place: PlaceModel, place_details: PlaceDetails, user_rating: UserRatingModel, user: UserModel } = initModels(connection)

export class PlaceRepository {
  static async getPlaces (offset, limit, place, searchPlace) {
    const where = {}
    if (place) {
      where.city = {
        [Op.like]: `%${place}%`
      }
    }
    if (searchPlace) {
      const queryText = searchPlace.toLowerCase()
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/\s/g, '_')
        .replace(/[^\w_]/g, '')
      where.name = {
        [Op.like]: `%${queryText}%`
      }
    }

    const count = await PlaceModel.count({ where })
    // const places = await PlaceModel.findAll({ where, offset, limit });
    const places = await PlaceModel.findAll({
      include: [{
        model: UserRatingModel,
        as: 'user_ratings'
      }],
      where,
      offset,
      limit
    })
    return [places, count]
  }

  static getPlace (id) {
    // Obteniendo los detalles del lugar populando el place principal
    return PlaceModel.findAll({
      nest: true,
      include: [{
        model: PlaceDetails,
        as: 'place_details',
        where: { place_id: id },
        required: true
      },
      {
        model: UserRatingModel,
        as: 'user_ratings',
        where: { place_id: id },
        required: false,
        include: [
          {
            model: UserModel,
            as: 'user',
            required: true,
            attributes: ['name', 'email']
          }
        ]
      }]
    })
  }
}
