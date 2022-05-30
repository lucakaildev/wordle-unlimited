const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true
    },
    words: {
        type: Array
    }
})

module.exports = mongoose.model("Words", wordSchema);