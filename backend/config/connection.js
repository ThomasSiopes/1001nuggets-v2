const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1/1001nuggets"
    // "mongodb+srv://tsiopes00:Sepois00@cluster0.supq7.mongodb.net/1001nuggets?retryWrites=true&w=majority"
    ,{}
);

module.exports = mongoose.connection;