const { Schema, model } = require("mongoose");

const peopleThing = new Schema({
    people: {
        type:String,
        required: true,
    },
    sortedName:{
        type:String,
        required:false
    },
    quotes: [
        {
            type: String,
        }
    ]
});

const People = model("People", peopleThing);

module.exports = People;