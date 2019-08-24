const router = require("express").Router();
const listingsController = require("../../controllers/listingsController");

// Matches with "/api/listings"
router.route("/")
  .get(listingsController.findAll)
  .post(listingsController.create);

// Matches with "/api/listings/:id"
router.route("/:id")
  .get(listingsController.findById)
  .put(listingsController.update)
  .delete(listingsController.remove);

// Matches with "/api/listings/:id"
router.route("/user/:id")
  .get(listingsController.findByUser);

module.exports = router;
