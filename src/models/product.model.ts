import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
  name: string;
  calories: number;
  sugar: number;
  img?: string;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    calories: {
      type: Number,
      required: true,
      default: 0,
    },
    sugar: {
      type: Number,
      required: true,
      default: 0,
    },
    img: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, //created and updated automatic
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
