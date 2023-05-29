const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConnection");
connectDB();
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
