const { Schema, model } = require("mongoose");

const score = new Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    }
});

const Score = model("Score", score);

module.exports = Score;