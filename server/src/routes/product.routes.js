import mongoose from "mongoose";
import express from "express";
import {
  addProduct,
  delectProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
} from "../controller/product.contorller.js";
import { upload } from "../middleware/multer.middleware.js";
const router = express.Router();

/* router
  .route("/upload")
  .post(upload.single("profileImage"), async (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.json("single upload");
  }); */

router.route("/").post(
  /* upload.fields([
    {
      name: "profileImage",
      maxCount: 1,
    },
  ]), */
  upload.single("profileImage"),
  addProduct
);

router.route("/:_id").get(getSingleProduct);
router.route("/").get(getProduct);
router.route("/:_id").put(updateProduct);
router.route("/:_id").delete(delectProduct);
export default router;
