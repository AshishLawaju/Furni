import { User } from "../../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let enPassword = await bcrypt.hash(password, 10);
    let user = await User.create({
      username,
      email,
      password: enPassword,
    });

    if (!user) {
      res.status(400).json("fail to create user");
    }
    res.send("user created !");
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // console.log(email, password);
    const checkUser = await User.findOne({
      email,
    });

    // console.log(checkUser);

    if (!checkUser) {
      res.status(400).json("invalid email");
    } else {
      let pass = await bcrypt.compare(password, checkUser.password);
      if (pass) {
        let token = checkUser.generateAccessToken();
        return res.status(200).json({
          token: token,
          name: checkUser.username,
          isAdmin: checkUser.isAdmin,
        });
      }
    }
    res.status(400).json("invalid credientials");
  } catch (error) {
    next(error);
  }
};

const userController = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    const user = jwt.verify(authorization, "shhhhh");

    if (!user) {
      res.status(403).json("no token !");
    }
    /*   const users = await User.find();
    if (!users) {
      res.status(500).json("no user found");
    } */
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export { registerController, loginController, userController };
