const { Schema, model } = require("mongoose");

const collection = new Schema({
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
    topics: [
        {
            type: String
        },
    ],
});

const Collection = model("Collection", collection);

module.exports = Collection;