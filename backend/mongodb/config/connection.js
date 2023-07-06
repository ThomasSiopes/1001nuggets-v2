const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/1001nuggets"
);

module.exports = mongoose.connection;