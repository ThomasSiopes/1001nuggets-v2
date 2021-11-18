const { Schema, model } = require("mongoose");

const QOTDschema = new Schema({
    storedID: {
        type: String,
    }
});

const QOTD = model("QOTD", QOTDschema);

module.exports = QOTD;