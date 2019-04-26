import express from "express";
import { reviewController } from "../controllers";

const review = express.Router()

review.post("/review", reviewController.create);
review.get("/review", reviewController.list);

export default review;
