const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const passport = require("passport");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/relisting", { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_kv1qjt9g:5pis301lrvvkpja0pn9s8t70on@ds311968.mlab.com:11968/heroku_kv1qjt9g", { useNewUrlParser: true });

// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
