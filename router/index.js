import { Router } from "express";
import citiesRouter from "./cities.js"; 
import slidesRouter from "./sliders.js";
import itinerariesRouter from "./intineraries.js"

const router = Router();

router.use("/cities", citiesRouter); 

router.use("/sliders", slidesRouter); 

router.use("/itineraries", itinerariesRouter);



export default router;