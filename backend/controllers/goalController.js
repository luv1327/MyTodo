const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  if (req.body.text) {
    const text = req.body.text;
    const newGoal = await Goal.create({
      user: req.user.id,
      text,
    });
    res.status(200).json(newGoal);
  } else {
    res.status(400);
    throw new Error("Please add a text field");
  }
});

const getById = asyncHandler(async (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    const goal = await Goal.findById(id);
    res.status(200).json(goal);
  } else {
    res.status(400);
    throw new Error("Invalid Goal ID");
  }
});

const updateGoals = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if (req.params.id) {
    const goal = await Goal.findById(id);
    if (goal.user.equals(req.user.id)) {
      const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, {
        // creates new if not exist
        new: true,
      });
      res.status(200).json(updatedGoal);
    }
  } else {
    res.status(400);
    throw new Error("Invalid Goal ID");
  }
});

const deleteGoals = asyncHandler(async (req, res) => {
  if (req.params.id) {
    const id = req.params.id;

    const deletedGoal = await Goal.findByIdAndRemove(id);
    console.log(deletedGoal);
    res.status(200).json({ message: "Goal Deleted Successfully" });
  } else {
    res.status(400);
    throw new Error("Invalid Goal ID");
  }
});

module.exports = { getGoals, setGoals, deleteGoals, updateGoals, getById };
