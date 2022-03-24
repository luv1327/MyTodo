const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    //creates updated and created fiels automatically
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
