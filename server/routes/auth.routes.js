import { Router } from "express";
import registerController from "../controllers/auth/registerController.js";
import loginController from "../controllers/auth/loginController.js";
import logoutController from "../controllers/auth/logoutController.js";

const router = Router();

router.post("/register", registerController)
router.post("/login", loginController)
router.get("/logout", logoutController)


export default router;