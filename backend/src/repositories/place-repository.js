import { connection } from "../database/db-connection.js";
import initModels from "../database/models/init-models.js";

const { place: PlaceModel, place_details: PlaceDetails } = initModels(connection)

export class PlaceRepository {

  static async getPlaces(offset, limit) {
    const count = await PlaceModel.count()
    const places = await PlaceModel.findAll({ offset, limit });
    return [places, count];
  }

  static getPlace(id) {
    // Obteniendo los detalles del lugar populando el place principal
    return PlaceModel.findAll({
      nest: true,
      raw: true,
      include: [{
        model: PlaceDetails,
        as: 'place_details',
        where: { place_id: id },
        required: true,        
      }]
    })
  }

}