import { ValidationsRepository } from "./validations-repository.js"
import initModels from "../database/models/init-models.js"
import { connection } from "../database/db-connection.js"

const { user_rating: UserRatingModel, user: UserModel } = initModels(connection)

export class ReviewRepository {

  static async getReviews(placeId) {

    ValidationsRepository.validatePlaceId(placeId);

    const reviews = await UserRatingModel.findAll({
      include: [{
        model: UserModel,
        as: 'user',
        attributes: ['name', 'email'],
        required: true
      }],
      where: {
        place_id: placeId
      },

    })

    return reviews
  }

  static async createReview(placeId, userId, rating, comment) {
    ValidationsRepository.validatePlaceId(placeId)
    ValidationsRepository.validateRating(rating)
    ValidationsRepository.validateComment(comment)

    //Si un usuario ya habia votado previamente, se actualiza la calificacion
    const [userRating] = await UserRatingModel.findAll({
      where: {
        place_id: placeId,
        user_id: userId
      }
    })
    
    if (userRating) {
      await UserRatingModel.update({
        rating,
        comment
      }, {
        where: {
          place_id: placeId,
          user_id: userId
        }
      })
    } else {
      await UserRatingModel.create({
        place_id: placeId,
        user_id: userId,
        rating
      })
    }
  }
}