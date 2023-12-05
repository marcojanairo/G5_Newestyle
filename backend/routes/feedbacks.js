const router = require("express").Router();
let Feedback = require("../models/feedback.model");

router.route("/").get(async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});

router.route("/add").post(async (req, res) => {
    const username = req.body.username;
    const feedback = req.body.feedback;
    // create a new Activity object
    const newFeedback = await new Todo({ username, activity });
    
    try {
        await newFeedback.save();
        res.json("Feedback added!");
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});

router.route("/:id").get(async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        res.json(feedback);
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});
    
router.route("/:id").delete(async (req, res) => {
    try {
        await Feedback.findByIdAndDelete(req.params.id);
        res.json("Feedback deleted.");
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});

router.route("/update/:id").post(async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        todo.feedback = req.body.feedback;

        await todo.save();
        res.json("Feedback updated!");
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});
    
module.exports = router;