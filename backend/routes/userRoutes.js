const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// we can add functions in the body but its a good practice to add it in a controller

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/me", protect, getUser);

module.exports = router;
