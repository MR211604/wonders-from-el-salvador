import { ValidationError } from "../repositories/error-repository.js";
import { ReviewRepository } from "../repositories/reviews-repository.js";

export async function getReviews(req, res) {
  try {
    const { placeId } = req.params;

    const reviews = await ReviewRepository.getReviews(placeId);

    return res.status(200).json({ ok: true, reviews });

  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).send({ ok: false, error: error.message });
    } else {
      return res.status(500).send({ ok: false, error: 'Error interno' });
    }
  }
}

export async function createReview(req, res) {
  try {
    const { placeId, userId, rating } = req.body;

    await ReviewRepository.createReview(placeId, userId, rating);

    return res.status(201).json({ ok: true });

  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).send({ ok: false, error: error.message });
    } else {
      console.log('error interno: ', error)
      return res.status(500).send({ ok: false, error: 'Error interno' });
    }
  }
}