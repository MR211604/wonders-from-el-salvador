import { ValidationsRepository } from "./validations-repository.js"
import initModels from "../database/models/init-models.js"
import { connection } from "../database/db-connection.js"

const { user_rating: UserRatingModel } = initModels(connection)

export class ReviewRepository {

  static async getReviews(placeId) {

    ValidationsRepository.validatePlaceId(placeId);

    const [reviews] = await UserRatingModel.findAll({
      where: {
        place_id: placeId
      },
    })

    return reviews
  }

  static async createReview(placeId, rating) {

  }
}