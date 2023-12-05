const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const feedbackSchema = new Schema({
    username: { type: String, required: false },
    feedback: { type: String, required: true },
});

// This Activitry creates the collection called activitymodels
const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;