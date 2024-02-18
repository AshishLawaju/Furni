import express from "express";
import { addOrder, getOrder } from "../controller/order.contorller.js";

const router = express.Router();

router.route("/").post(addOrder);
router.route("/").get(getOrder);


export default router