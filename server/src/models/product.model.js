import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    inStock: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default : "This is Item !"
    },
    categorise: [
      {
        type: String,
      },
    ],
    brands: [
      {
        type: String,
      },
    ],
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product",productSchema)

export {Product}
