const { Schema, model } = require("mongoose");

const quote = new Schema({
    quoteText: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: false
    },
    topics: [
        {
            type: String,
        }
    ],
    realID: {
        type: String,
        required: true
    },
    relatedTopics: [
        {
            type: String,
        }
    ],
    collections: [
        {
            type: String,
        }
    ],
    somePeople: {
        type: Boolean,
        required: false
    }
});

const Quote = model("Quote", quote);

module.exports = Quote;