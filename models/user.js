const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    listings: [{ type: Schema.Types.ObjectId, ref: "Listing" }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
