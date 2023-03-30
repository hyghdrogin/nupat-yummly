/* eslint-disable new-cap */
import {Router} from "express";
import {
  feedsAutoComplete, feedsSearch, feedsList, feedsListSimilarities
} from "../controllers/feedsController.js";

const router = Router();

router.get("/auto-complete", feedsAutoComplete);
router.get("/search", feedsSearch);
router.get("/list", feedsList);
router.get("/list-similarities", feedsListSimilarities);

export default router;
