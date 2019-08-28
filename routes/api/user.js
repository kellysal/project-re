const router = require("express").Router();

const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
    .post(userController.create);

// Matches with "/api/user/auth"
router.route("/auth")
    .post(userController.authWithPassword)
    .get(userController.authWithPassword);

module.exports = router;
