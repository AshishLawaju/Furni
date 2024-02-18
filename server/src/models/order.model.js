import { mongoose, Schema } from "mongoose";
// import { Product } from "./product.model";

const subSchema = new Schema({
  brands: [],
  categories: [],
  description: String,
  image: String,
  inStock: String,
  name: String,
  price: String,
  quantity: Number,
});

const orderSchema = new Schema(
  {
    country: {
      type: String,
      //   require: true,
    },
    firstName: {
      type: String,
      //   require: true,
    },
    lastName: {
      type: String,
      //   require: true,
    },
    address: {
      type: String,
      //   require: true,
    },
    email: {
      type: String,
      //   require: true,
    },
    phone: {
      type: String,
      //   require: true,
    },
    billingAmount: {
      type: String,
    },

    userOrder: [
      {
        brands: [],
        categories: [],
        description: String,
        image: String,
        inStock: String,
        name: String,
        price: String,
        quantity: Number,
      },
    ],
    /* userOrder: [
      {
           brands: [],
        categories: [],
        description: String,
        image: String,
        inStock: String, 
        name: String,
        price: String,
        quantity: Number,
      },
    ], */
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export { Order };
