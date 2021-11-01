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
    FT: {
        type: String,
        required: true,
    },
    quotes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Quote",
        },
    ],
    color: {
        type: String,
        required: false,
    },
    darkColor: {
        type: String,
        required: false,
    },
    lightColor: {
        type: String,
        required: false,
    },
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
    }
});

const Author = model("Author", authorSchema);

module.exports = Author;