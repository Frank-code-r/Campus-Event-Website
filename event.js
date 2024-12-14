const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
    description: { type: String },
});

module.exports = mongoose.model('Event', EventSchema);
