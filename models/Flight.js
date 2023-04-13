const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: 
    {
        type: String,
        enum: [ 'American', 'Southwest', 'United' ],
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        // required: true
        // default: Date.now
    }
})

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight;