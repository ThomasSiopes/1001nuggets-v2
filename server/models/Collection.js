const { Schema, model } = require("mongoose");

const collectionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    realID: {
        type: String,
        required: true
    },
    topics: [
        {
            type: String
        },
    ],
});

const Collection = model("Collection", collectionSchema);

module.exports = Collection;