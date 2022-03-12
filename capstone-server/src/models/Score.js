const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    game: {
        type: String,
    },
    dt: {
        type: String,
    },
    tries: {
        type: Number
    }
});

mongoose.model('Score', scoreSchema)