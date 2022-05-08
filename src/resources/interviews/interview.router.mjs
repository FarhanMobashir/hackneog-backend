import { Router } from "express";
import interviewController from "./interview.controller.mjs";
const interviewRouter = Router();

// /api/item
interviewRouter
  .route("/")
  .get(interviewController.getMany)
  .post(interviewController.createOne);

// /api/item/:id

interviewRouter
  .route("/:id")
  .get(interviewController.getOne)
  .put(interviewController.updateOne)
  .delete(interviewController.removeOne);

export default interviewRouter;
