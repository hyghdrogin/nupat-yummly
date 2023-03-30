/* eslint-disable new-cap */
import {Router} from "express";
import {categoryList} from "../controllers/categoriesController.js";

const router = Router();

router.get("/list", categoryList);

export default router;
