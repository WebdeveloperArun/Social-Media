import { Router } from "express";
import getUserController from "../controllers/user/getUserController.js";
import unfollowUserController from "../controllers/user/unfollowUserController.js";
import getFollowingsController from "../controllers/user/getFollowingsController.js";
import getFollowersController from "../controllers/user/getFollowersController.js";
import followUserController from "../controllers/user/followUserController.js";
import deleteUserController from "../controllers/user/deleteUserController.js";
import updateUserController from "../controllers/user/updateUserController.js";

const router = Router();

router.get("/:id", getUserController);
router.post("/follow/:id", followUserController);
router.post("/unfollow/:id", unfollowUserController);
router.get("/followers/:id", getFollowersController);
router.get("/followings/:id", getFollowingsController);
router.delete("/delete/:id", deleteUserController);
router.put("/update/:id", updateUserController);

export default router;
