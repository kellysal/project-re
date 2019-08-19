const router = require("express").Router();
const listingRoutes = require("./listings");
const surveyRoutes = require("./surveys");
const userRoutes = require("./user");

// Listing routes
router.use("/listings", listingRoutes);

// Survey routes
router.use("/surveys", surveyRoutes);

// User routes
router.use("/user", userRoutes);

module.exports = router;
