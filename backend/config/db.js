const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Mongo DB connected : ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;

autoIncrement.initialize(mongoose.connection);
