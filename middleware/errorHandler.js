const { contants } = require("../contants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case contants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case contants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case contants.UNAUTHORIZE:
      res.json({
        title: "UNAUTHORIZE",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case contants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case contants.SERVER_ERROR:
      res.json({
        title: "SERVER_ERROR",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log("NO error,All good !");
      break;
  }
};
module.exports = errorHandler;
