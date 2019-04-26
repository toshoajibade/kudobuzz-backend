import express from "express";
import reviewRoute from "./reviewRoute";
import validate from "../middlewares/validate";

const routes = express.Router();

routes.use(validate);

routes.use("/api/v1/review", reviewRoute);

export default routes;
