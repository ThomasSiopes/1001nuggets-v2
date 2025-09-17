const { Schema, model } = require("mongoose");

const peopleThing = new Schema({
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

const People = model("People", peopleThing);

module.exports = People;