// Packages
const express = require("express");
const mongoose = require("mongoose");

// Listen on port
const PORT = process.env.PORT || 8080;

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

