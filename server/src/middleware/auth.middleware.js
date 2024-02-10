import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      res.status(401).json("unAuthorization req no token");
    }
    const decodedToken = jwt.verify(token, "shhh");
    const user = await User.findById(decodedToken?._id).select("-password");
    next();
  } catch (error) {
    next(error);
  }
};
