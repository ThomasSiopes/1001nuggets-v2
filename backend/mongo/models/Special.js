const { Schema, model } = require("mongoose");

const specialThing = new Schema({
    special: {
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

const Special = model("Special", specialThing);

module.exports = Special;