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
    quotes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Quote",
        },
    ],
});

const Collection = model("Collection", collectionSchema);

module.exports = Collection;