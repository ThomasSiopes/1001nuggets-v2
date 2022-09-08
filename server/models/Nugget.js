const { Schema, model } = require("mongoose");

const nuggetSchema = new Schema({
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
});

const Nugget = model("Nugget", nuggetSchema);

module.exports = Nugget;