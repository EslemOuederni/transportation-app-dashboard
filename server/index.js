const express = require("express");
const router = require("./routes/index.routes");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "https://transportation-app-dashboard-client.vercel.app",
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//routes
app.use(router);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // listen for requests
    app.listen(3000, () => {
      console.log("connected to db & listening on port", 3000);
    });
  })
  .catch((error) => {
    console.log(error);
  });
