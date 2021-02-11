// Packages
const express = require("express");
const mongoose = require("mongoose");
const view = require("./routes/view");
const api = require("./routes/api");

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
app.use("/api", api);
app.use("/", view);


const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose connected successfully.");
});

connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err);
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});