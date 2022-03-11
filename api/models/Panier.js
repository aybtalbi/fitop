const mongoose = require("mongoose");

const PanierSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        couleur: {
          type: String,
        },
        Size: {
          type: String,
        },
        Price: {
          type: Number,
        },
      },
    ],
    Total: { type: Number, required: true },
    panierQuantity: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Panier", PanierSchema);
