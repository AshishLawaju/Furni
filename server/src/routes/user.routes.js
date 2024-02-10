import express from "express";
import { loginController, registerController, userController } from "../controller/user/user.controller.js";

const router = express.Router();

router.route("/getusers").get(userController);
router.route("/register").post(registerController);
router.route("/login").post(loginController)

export default router;
