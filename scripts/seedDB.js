const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Listings collection and inserts the listings below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/relisting", { useNewUrlParser: true });

const listingSeed = [
  {
    address: "250 Northern Ave",
    county: "Boston",
    sqft: 724,
    price: 3361,
    description:
      "Welcome to the trendy sought after Seaport neighborhood of Boston! Enjoy concierge services, garage parking, classy lounges for entertaining, quiet business spaces, fitness center, and a rooftop lounge with stunning views!",
    date: new Date(Date.now())
  },
  {
    address: "41 Fan Pier Blvd",
    county: "Boston",
    sqft: 750,
    price: 3821,
    description:
      "This is a non broker fee listing! Luxury apartment in Boston's up and coming Seaport district Commuting needs - proximity to Bostons South Station, I90 + I93. As well as the silver line. Ask about other available floor plans. Pricing and availability are subject to change. Pet friendly. Some breed restrictions may apply.",
    date: new Date(Date.now())
  },
  {
    address: "46 Commonwealth Ave",
    county: "Boston",
    sqft: 800,
    price: 3500,
    description:
      "Located on the 1st block of Commonwealth Ave in a magnificent converted mansion with detailed common areas. Welcoming foyer leads to charming living room with open floor plan. Very sunny unit with amazing city views, gleaming walnut stained hard wood floors, high ceilings with elegant moldings, as well as a fire place. Top of the line appliances in the kitchen and professionally designed closets and bathrooms.",
    date: new Date(Date.now())
  }
];

db.Listing
  .remove({})
  .then(() => db.Listing.collection.insertMany(listingSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
