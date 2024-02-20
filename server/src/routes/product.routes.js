import mongoose from "mongoose";
import express from "express";
import {
  addProduct,
  delectProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  updateStock,
} from "../controller/product.contorller.js";
import { upload } from "../middleware/multer.middleware.js";
import { auth } from "../middleware/auth.middleware.js";
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
  auth,
  upload.single("profileImage"),
  addProduct
);

router.route("/:_id").get(getSingleProduct);
router.route("/").get(getProduct);
router.route("/:_id").put(updateProduct);
router.route("/:_id").delete(delectProduct);
router.route("/stock/:_id/:quantity").put(updateStock)
export default router;
