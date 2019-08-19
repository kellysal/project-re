const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    user: {
        type: Number,
        required: true
    },
    property: {
        type: String,
        required: true
    },
    answers: [{
        type: String
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Survey = mongoose.model("Survey", SurveySchema);

module.exports = Survey;
