const mongoose = require("mongoose");

const Schema = mongoose.Schema;

constWorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [

    ]
})


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;