import { Product } from "../models/product.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";

const addProduct = async (req, res, next) => {
  try {
    const { name, price, inStock, description, categories, brands } = req.body;

    console.log({ "req.file": req.file });
    console.log({ "req.body": req.body });
    // const imageLocalPath = req.files["profileImage"][0].path;
    const imageLocalPath = req.file.path;
    console.log(imageLocalPath);
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
    const product = await Product.findByIdAndDelete(req.params);
    if (!product) {
      res.status(400).json("no product found");
    }
    res.status(200).json(" product delected");
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
};
