const express = require("express");

const router = express.Router();

const adminRouter = require("./Admin.routes");

router.use("/api/admin", adminRouter);

module.exports = router;
