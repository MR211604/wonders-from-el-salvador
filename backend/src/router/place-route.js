import { Router } from "express";
import { getPlaceById, getPlaces } from "../controllers/place-controller.js";

const router = Router();

router.get('/getPlaces', getPlaces);

router.get('/getPlaceById/:id', getPlaceById);

export default router;