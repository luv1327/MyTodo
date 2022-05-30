// split() will convert the string into array
// for eg const string = 'Hello World'
// we are seperating by passing space
// const splittedText = string.split(' ')
// it will return and array like this ['Hello','World']
// then we can acces individual value with index number

const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // getting the token from header
      token = req.headers.authorization.split(" ")[1];
      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user from the token
      // setting the user to use in all the routes without password
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      console.log(err);
      // 401 Not authorized
      res.status(401);
      throw new Error("User not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized no token");
  }
});

module.exports = { protect };
