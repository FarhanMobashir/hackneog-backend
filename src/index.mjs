import express, { urlencoded, json } from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { protect } from "./auth.mjs";
import { signup } from "./auth.mjs";
import { signin } from "./auth.mjs";
import interviewRouter from "./resources/interviews/interview.router.mjs";
const app = express();
dotenv.config();
app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/signup", signup);
app.post("/signin", signin);

// app.use("/api", protect);
app.use("/api/interview", protect, interviewRouter);

mongoose.connect(process.env.MONGO_URI).then((data) => {
  console.log("mongo connected");
});

app.listen(process.env.PORT, () => {
  console.log(
    `App listening on http://${process.env.HOSTNAME}:${process.env.PORT}/api`
  );
});
