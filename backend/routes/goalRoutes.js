const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  deleteGoals,
  updateGoals,
  getById,
} = require("../controllers/goalController");

// we can add functions in the body but its a good practice to add it in a controller

router.get("/", getGoals);

router.post("/", setGoals);

router.get("/:id", getById);

router.put("/:id", updateGoals);

router.delete("/:id", deleteGoals);

module.exports = router;
