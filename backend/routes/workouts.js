const express = require("express");
const router = express.Router();

const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
// const Workout = require("../models/WorkoutModel");

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a new workout
router.delete("/:id", deleteWorkout);

//UPDATE a new workout
router.patch("/:id", updateWorkout);

module.exports = router;
