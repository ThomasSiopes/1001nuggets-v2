const { Schema, model } = require("mongoose");

const qotd = new Schema({
    index: {
        type: String,
        required: true
    }
})

const QOTD = model("QOTD", qotd);

module.exports = QOTD;