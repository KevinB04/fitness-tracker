const express = require("express");
const Workout = require("../models/workout");

const router = express.Router();

router.get("/", (req, res) => {
  Workout.find()
    .then((allWorkouts) => {
      res.json(allWorkouts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.get("/:id", (req, res) => {
  Workout.findOne({ _id: req.params.id })
    .then((singleWorkout) => {
      res.json(singleWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

router.post("/", (req, res) => {
  Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).end();
    });
});

router.put("/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedWorkout) => {
      console.log(updatedWorkout);
      res.json(updatedWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

router.delete("/:id", (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then((deletedWorkout) => {
      res.json(deletedWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

module.exports = router;