
import { addTeam } from "../controller/team.controller.js";
import { upload } from "../middleware/multer.middleware.js";

import express from "express"

const router = express.Router()


router.route("/").post(upload.single("profile"),addTeam)

export default router