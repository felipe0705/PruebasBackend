import {Router} from "express";
import { allCities, citiesByname, allContinents} from "../controllers/read.js";
const router = Router();

router.get("/all", allCities);
router.get("/name/:name", citiesByname);
router.get("/continents", allContinents);






export default router; 