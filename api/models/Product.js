const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array , required: true},
    size: { type: Array , required: true},
    color: { type: Array , required: true},
    type: { type: Array , required: true},
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    brand: { type: String, required: true },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
