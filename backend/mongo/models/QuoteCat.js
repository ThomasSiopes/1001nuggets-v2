const { Schema, model } = require("mongoose");

const quoteCat = new Schema({
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

const QuoteCat = model("QuoteCat", quoteCat);

module.exports = QuoteCat;