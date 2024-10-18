import { Router } from 'express'
import { getReviews } from '../controllers/review-controller.js';

const router = Router();

router.get('/getReviews/:placeId', getReviews)



export default router