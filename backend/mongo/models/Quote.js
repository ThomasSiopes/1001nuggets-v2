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
    people: [
        {
            type: String,
        }
    ],
    things: [
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
    unrelatedTopics: [
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
    },
    censors: [
        {
            type: String,
        }
    ]
});

const Quote = model("Quote", quote);

module.exports = Quote;