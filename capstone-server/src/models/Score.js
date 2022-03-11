const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    dt: {
        type: String,
    },
    tries: {
        type: Number
    }
});

mongoose.model('Score', scoreSchema)