const { Schema, model } = require("mongoose");

const glossary = new Schema({
    typing: {
        type: String,
        required: true,
        unique: true,
    },
    sortedName: {
        type: String,
        required: true
    },
    content: [
        {
            index: {type: String, required:true, unique:true},
            typing: {type: String, required:true, unique:false},
            definition: {type: String, required:true},
            sortedName: {type: String, required:true, unique:true},
        }
    ]
});

const Glossary = model("Glossary", glossary);

module.exports = Glossary;