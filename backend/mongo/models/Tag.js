const { Schema, model } = require("mongoose");

const tagThing = new Schema({
    tag: {
        type:String,
        required: true,
    },
    authors: [
        {
            type: String,
        }
    ]
});

const Tag = model("Tag", tagThing);

module.exports = Tag;