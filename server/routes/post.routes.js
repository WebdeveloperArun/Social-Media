import { Router } from "express";
import createPostController from "../controllers/post/createPostController.js";
import updatePostController from "../controllers/post/updatePostController.js";
import deletePostController from "../controllers/post/deletePostController.js";
import getPostController from "../controllers/post/getPostController.js";
import getAllPostsController from "../controllers/post/getAllPostsController.js";
import likePostController from "../controllers/post/likePostController.js";
import getFriendPostsController from "../controllers/post/getFriendPostsController.js";
import getUserPostsController from "../controllers/post/getUserPostsController.js";

const router = Router();

router.post("/create", createPostController);
router.post("/update/:id", updatePostController);
router.delete("/delete/:id", deletePostController);
router.get("/get/:id", getPostController);
router.get("/getAll", getAllPostsController);
router.patch("/like/:id", likePostController);
router.get("/getFriendPosts/:id", getFriendPostsController);
router.get("/getUserPosts/:id", getUserPostsController);

export default router;
