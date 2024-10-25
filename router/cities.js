import {Router} from "express";
import { allCities, citiesByname} from "../controllers/read.js";




const router = Router(); // Creamos el enrutador

// Rutas para obtener ciudades
router.get("/all", allCities);
router.get("/name/:name", citiesByname);





export default router; 