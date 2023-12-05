const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const todoSchema = new Schema({
    name: { type: String, required: false },
    feedback: { type: String, required: true },
});

// This Activitry creates the collection called activitymodels
const Feedback = mongoose.model("Feedback", todoSchema);

module.exports = Feedback;