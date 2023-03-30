/* eslint-disable new-cap */
import {Router} from "express";
import categoryRoute from "./categoriesRoutes.js";
import reviewRoute from "./reviewsRoutes.js";
import tagRoute from "./tagsRoutes.js";
import feedRoute from "./feedsRoutes.js";

const router = Router();

router.use("/categories", categoryRoute);
router.use("/reviews", reviewRoute);
router.use("/tags", tagRoute);
router.use("/feeds", feedRoute);

export default router;
