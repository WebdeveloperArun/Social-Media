import { Router } from "express";
import createPostController from "../controllers/post/createPostController.js";
import updatePostController from "../controllers/post/updatePostController.js";

const router = Router();

router.post("/create", createPostController);
router.post("/update", updatePostController);
// delete post
// get post
// get all post
// like post
// dislikepost

export default router;
