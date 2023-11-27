const { Schema, model } = require("mongoose");

const qotd = new Schema({
    index: {
        type: Number,
        required: true
    }
})

const QOTD = model("QOTD", qotd);

module.exports = QOTD;