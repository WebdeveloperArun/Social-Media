import { Router } from "express";
import getUserController from "../controllers/getUserController.js";
import unfollowUserController from "../controllers/unfollowUserController.js";
import getFollowingsController from "../controllers/getFollowingsController.js";
import getFollowersController from "../controllers/getFollowersController.js";
import followUserController from "../controllers/followUserController.js";
import deleteUserController from "../controllers/deleteUserController.js";
import updateUserController from "../controllers/updateUserController.js";

const router = Router();

router.get("/:id", getUserController);
router.post("/follow/:id", followUserController);
router.post("/unfollow/:id", unfollowUserController);
router.get("/followers/:id", getFollowersController);
router.get("/followings/:id", getFollowingsController);
router.delete("/delete/:id", deleteUserController);
router.put("/update/:id", updateUserController);

export default router;
