const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  deleteGoals,
  updateGoals,
  getById,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

// we can add functions in the body but its a good practice to add it in a controller

router.get("/", protect, getGoals);

router.post("/", protect, setGoals);

router.get("/:id", protect, getById);

router.put("/:id", protect, updateGoals);

router.delete("/:id", protect, deleteGoals);

module.exports = router;
