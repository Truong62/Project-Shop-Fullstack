const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const CustomerSchema = new mongoose.Schema(
    {
        name: { type: String },
        address: String,
        email: String,
        phone: { type: String },
    },
    {
        timestamps: true,
    }
);

CustomerSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
