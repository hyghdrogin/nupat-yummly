/* eslint-disable new-cap */
import {Router} from "express";
import {tagList} from "../controllers/tagsController.js";

const router = Router();

router.get("/list", tagList);

export default router;
