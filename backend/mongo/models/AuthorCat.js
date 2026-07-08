const { Schema, model } = require("mongoose");

const authorCat = new Schema({
    name: {
        type:String,
        required: true,
    },
    sortedName:{
        type:String,
        required:false
    },
    authors: [
        {
            type: String,
        }
    ],
    realID: {
        type: String,
        required: true
    },
});

const AuthorCat = model("AuthorCat", authorCat);

module.exports = AuthorCat;