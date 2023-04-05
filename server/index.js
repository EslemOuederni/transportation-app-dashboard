const express = require("express");
const router = require("./routes/index.routes");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

//middlewares
app.use(express.json());
const allowedOrigins = "https://transportation-app-dashboard-server.vercel.app";
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
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
