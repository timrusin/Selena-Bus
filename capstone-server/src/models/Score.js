const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    game: {
        type: String,
        required: true,
    },
    dt: {
        type: String,
        required: true,
    },
    tries: {
        type: Number,
        required: true,
    }
});

mongoose.model('Score', scoreSchema)