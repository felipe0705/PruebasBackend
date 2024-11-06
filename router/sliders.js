import {Router} from "express";
import { allSlides} from "../controllers/read.js";

const router = Router(); 

router.get("/all", allSlides);

export default router; 