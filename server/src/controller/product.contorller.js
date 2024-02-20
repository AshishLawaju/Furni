import { Product } from "../models/product.model.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import jwt from "jsonwebtoken";
const addProduct = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decodedToken = jwt.verify(token, "shhhhh");
    const user = await User.findById(decodedToken?.id).select("-password");

    /*  console.log({ decodedToken });
    console.log({ user }); */

    if (!user.isAdmin) {
      return res.status(403).json("only the admin can add");
    }
    const { name, price, inStock, description, categories, brands } = req.body;

    /* console.log({ "req.files": req.file });
    console.log({ "req.body": req.body }); */
    // const imageLocalPath = req.files["profileImage"][0].path;
    const imageLocalPath = req.file.path;
    // console.log(imageLocalPath);
    let imageUpload = await uploadOnCloudinary(imageLocalPath);
    const photo = imageUpload.url;
    const product = await Product.create({
      name,
      price,
      inStock,
      description,
      categories,
      brands,
      image: photo,
    });

    if (!product) {
      res.status(400).json("no prouduct");
    }
    res.status(200).json(" prouduct add!");
  } catch (error) {
    console.log({ error });
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const products = await Product.find();
    if (!products) {
      res.status(500).json("error fetching products");
    }
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
const getSingleProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params);
    if (!product) {
      res.status(500).json("error fetching products");
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decodedToken = jwt.verify(token, "shhhhh");
    const user = await User.findById(decodedToken?.id).select("-password");

    /*  console.log({ decodedToken });
    console.log({ user }); */

    if (!user.isAdmin) {
      return res.status(403).json("only the admin can add");
    }

    const { name, price, inStock, description } = req.body;
    const product = await Product.findByIdAndUpdate(req.params, {
      name,
      price,
      inStock,
      description,
    });
    if (!product) {
      res.status(400).json("no product found");
    }
    res.status(200).json(" product updated !");
  } catch (error) {
    next(error);
  }
};
const delectProduct = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decodedToken = jwt.verify(token, "shhhhh");
    const user = await User.findById(decodedToken?.id).select("-password");

    /*  console.log({ decodedToken });
    console.log({ user }); */

    if (!user.isAdmin) {
      return res.status(403).json("only the admin can add");
    }
    const product = await Product.findByIdAndDelete(req.params);
    if (!product) {
      res.status(400).json("no product found");
    }
    res.status(200).json(" product delected");
  } catch (error) {
    next(error);
  }
};

const updateStock = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decodedToken = jwt.verify(token, "shhhhh");
    const user = await User.findById(decodedToken?.id).select("-password");

    if (!user) {
      res.status(403).json("no user found!");
    }

    const { inStock } = await Product.findById(req.params);
    // res.status(201).json(req.params);
    // res.json(typeof inStock);

    let newInStock = parseInt(inStock) - parseInt(req.params.quantity);

    const product = await Product.findByIdAndUpdate(req.params, {
      inStock: newInStock,
    });
    if (!product) {
      res.status(400).json("no product found");
    }
    res.status(200).json(" stock updated !");
  } catch (error) {
    next(error);
  }
};

export {
  addProduct,
  getSingleProduct,
  getProduct,
  updateProduct,
  delectProduct,
  updateStock,
};
