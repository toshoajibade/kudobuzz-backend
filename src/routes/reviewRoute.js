import express from "express";
import { reviewController } from "../controllers";

const review = express.Router();

review.post("/", reviewController.create);
review.get("/:business_id", reviewController.list);

export default review;
