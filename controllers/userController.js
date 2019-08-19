const db = require("../models");

// Defining methods for the userController
module.exports = {
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    authWithPassword: function (req, res) {
        db.User
            .findOne({ email: req.body.email })
            .then(dbModel => {
                if (req.body.password === dbModel.password) {
                    res.status(200).json(dbModel);
                } else {
                    res.status(401).json({});
                }
            })
            .catch(err => res.status(422).json(err));
    },
};
