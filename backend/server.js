const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;

const uri = "mongodb+srv://FE_Prep_User:12345@feprepcluster.37d7plq.mongodb.net/FeedbackForm_Project";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

// import routes
const feedbackRouter = require('./routes/feedback');

// Adding /todos before all routes
app.use('/feedback', todoRouter);

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});