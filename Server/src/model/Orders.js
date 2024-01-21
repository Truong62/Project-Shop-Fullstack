const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const OrdersSchema = new mongoose.Schema(
    {
        customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer"},
        order_date: Date,
        product_orders: [{
            product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number,
            size: String,
        }],
        status: String,

    },
    {
        timestamps: true,
    }
);

OrdersSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Orders = mongoose.model("Orders", OrdersSchema);

module.exports = Orders;
