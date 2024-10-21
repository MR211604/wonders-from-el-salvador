import { Router } from 'express'
import { createReview, getReviews } from '../controllers/review-controller.js';

const router = Router();

router.get('/getReviews/:placeId', getReviews)

router.post('/createReview', createReview)


export default router