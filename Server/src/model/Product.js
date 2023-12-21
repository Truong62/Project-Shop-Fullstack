const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    stock: { type: Number, default: 0 }, 
    price: { type: Number, required: true }, 
    size: String,
    thumbnailURL: String, 
    imgDescription :String,
    isDeleted: { type: Boolean, default: false }
  },
  {
    timestamps: true,
  }
);

ProductSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
