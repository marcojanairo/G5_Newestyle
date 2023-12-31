const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

// import routes
const feedbackRouter = require('./routes/feedbacks');

// Adding /feedback before all routes
app.use('/feedback', feedbackRouter);

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});