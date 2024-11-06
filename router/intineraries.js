import { Router } from "express";
import { allItineraries, itinerariesByCity } from "../controllers/read.js";

const router = Router();

// Ruta para obtener todos los itinerarios
router.get("/all", allItineraries);

router.get("/:city", itinerariesByCity);

export default router;
