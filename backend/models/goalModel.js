const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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

goalSchema.plugin(autoIncrement.plugin, { model: "Goal", field: "bookId" });

module.exports = mongoose.model("Goal", goalSchema);
