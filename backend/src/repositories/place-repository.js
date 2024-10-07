import { connection } from "../database/db-connection.js";
import initModels from "../database/models/init-models.js";

const { place: PlaceModel } = initModels(connection)

export class PlaceRepository {

  static async getPlaces(offset, limit) {
    const count = await PlaceModel.count()
    const places = await PlaceModel.findAll({ offset, limit });
    return [places, count];
  }

  static getPlace(id) {
    return PlaceModel.findByPk(id);
  }

}