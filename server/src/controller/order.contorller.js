import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";

const addOrder = async (req, res, next) => {
  try {
    /*   const token = req.header("Authorization");
    const decodedToken = jwt.verify(token, "shhhhh");
    const user = await User.findById(decodedToken?.id).select("-password");
    
 */
    if (false) {
      res.status(403).json("user must be login ");
    }
    const { country, firstName, lastName, address, email, phone, userOrder } =
      req.body;

    const newOrder = await Order.create({
      country,
      firstName,
      lastName,
      address,
      email,
      phone,
      userOrder,
    });
    if (!newOrder) {
      res.status(400).json("order not success");
    }

    res.status(200).json("order success");
    // console.log(req.body);
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res, next) => {
  try {
    const orders = await Order.find();
    if (!orders) {
      res.status(500).json("error in orders");
    }
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export { addOrder ,getOrder};
