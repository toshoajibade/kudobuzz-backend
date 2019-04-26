import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import logger from "morgan";
import mongoose from "mongoose";
import routes from "./routes";
import corsConfig from "./configs/corsConfig";

const app = express();

// Load environmental variables

dotenv.config();

// Configure app middleware

app.use(helmet());
app.use(compression());
app.use(cors(corsConfig));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.set("trust proxy", true);

// Connect to MongoDB database using mongoose ORM

const mongoDB = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, autoIndex: false })
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));

export default app;
