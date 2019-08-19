const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  county: {
    type: String,
    required: true
  },
  sqft: {
    type: Number,
  },
  price: {
    type: Number,
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  surveys: { type: Schema.Types.ObjectId, ref: "Survey" }
});

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;
