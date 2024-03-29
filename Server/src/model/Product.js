const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    stock: { type: Number, default: 0 },
    price: { type: String, required: true },
    thumbnailURL: String,
    imgDescription: { type: [String], required: true },
    size: { type: [String], required: true },
    discount: String,
  },
  {
    timestamps: true,
  }
);

ProductSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
