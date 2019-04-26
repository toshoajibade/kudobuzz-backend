import express from "express";
import reviewRoute from "./reviewRoute"

const routes = express.Router();

routes.use("/review", reviewRoute);

export default routes;
