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
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;
