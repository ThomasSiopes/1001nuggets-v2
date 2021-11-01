const { Schema, model } = require("mongoose");

const genLinkSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
});

const GenLink = model("GenLink", genLinkSchema);

module.exports = GenLink;