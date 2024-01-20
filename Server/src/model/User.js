const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const UserSchema = new mongoose.Schema(
    {
        name: { type: String },
        password: { type: String },
        account: { type: String },
        address: String,
        email: String,
        phone: { type: String },
    },
    {
        timestamps: true,
    }
);

UserSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const User = mongoose.model("User", UserSchema);

module.exports = User;
