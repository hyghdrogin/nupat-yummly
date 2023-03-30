/* eslint-disable new-cap */
import {Router} from "express";
import {reviewList} from "../controllers/reviewsController.js";

const router = Router();

router.get("/list", reviewList);

export default router;
