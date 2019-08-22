const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    // user: [{ type: Schema.Types.ObjectId, ref: "User" }],
    property: { type: Schema.Types.ObjectId, ref: "Listing" },
    answers: [{
        type: String
    }]
});

const Survey = mongoose.model("Survey", SurveySchema);

module.exports = Survey;
