const { Schema, model } = require("mongoose");

const socialLinkSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
});

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quotes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Quote",
        },
    ],
    thumbnail: {
        type: String,
        required: false,
    },
    links: [
        {
            type: socialLinkSchema,
        }
    ],
    description: {
        type: String,
        required: false,
    },
    realID: {
        type: String,
        required: true
    }
});

const Author = model("Author", authorSchema);

module.exports = Author;