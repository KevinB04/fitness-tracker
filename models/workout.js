const mongoose = require("mongoose");

const Schema = mongoose.Schema;

constWorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter exercise name",
            },
            type: {
                type: String,
                trim: true,
                required: "Enter exercise type",
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            duration: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ] 
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;