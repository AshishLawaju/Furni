
import { addTeam, getTeam } from "../controller/team.controller.js";
import { upload } from "../middleware/multer.middleware.js";

import express from "express"

const router = express.Router()


router.route("/").post(upload.single("profile"),addTeam)
router.route("/").get(getTeam)
export default router