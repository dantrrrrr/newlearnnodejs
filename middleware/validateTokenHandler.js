const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.status(401);
    throw new Error("No token provided");
  }

  token = authHeader.split(" ")[1];
  if (!token) {
    res.status(401);
    throw new Error("Invalid token");
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401);
      throw new Error("User not authenticated");
    }
    req.user = decoded.user;
  });

  next();
});
module.exports = validateToken;
