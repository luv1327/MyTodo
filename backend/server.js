const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// if i hit api/goals check the goal routes
app.use("/api/goals", require("./routes/goalRoutes"));

// overiding default express error handler
//always put this under the routes
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on ${port}`));
