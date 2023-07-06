const { Schema, model } = require("mongoose");

const author = new Schema({
    name: {
        type:String,
        required: true,
    },
    quotes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Quote"
        }
    ],
    lastName: {
        type: String,
        required: true
    },
    realID: {
        type: String,
        required: true
    }
});

const Author = model("Author", author);

module.exports = Author;