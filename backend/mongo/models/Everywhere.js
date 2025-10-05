const { Schema, model } = require("mongoose");

const everywhere = new Schema({
    name: {
        type: String,
        required: true,
    },
    sortedName: {
        type: String, 
        required: true
    },
    realID: {
        type: String,
        required: true
    },
    quotes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Quote",
        },
    ],
});

const Everywhere = model("Everywhere", everywhere);

module.exports = Everywhere;