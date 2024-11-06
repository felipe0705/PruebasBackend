import express, { request, response } from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import router from "./router/index.js"; 
import not_found_handlers from "./middleware/not_found_handler.js";
import error_handlers from "./middleware/error_handler.js";
import error_400  from "./middleware/error_400.js";


const server = express();
const PORT = process.env.PORT || 8080;


server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan("dev"));
server.use("/api", router);
server.use(error_400);
server.use(not_found_handlers);
server.use(error_handlers);

server.listen(PORT);