import axios from "axios";

export default {
    // Gets all surveys
    getSurveys: function () {
        return axios.get("/api/surveys");
    },
    // Gets the survey with the given id / property id
    getSurvey: function (id) {
        return axios.get("/api/surveys/" + id);
    },
    // Deletes the survey with the given id
    deleteSurvey: function (id) {
        return axios.delete("/api/surveys/" + id);
    },
    // Saves a survey to the database
    saveSurvey: function (surveyData) {
        console.log(surveyData);
        return axios.post("/api/surveys", surveyData);
    }
};
