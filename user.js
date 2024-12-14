const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    preferences: { type: [String], default: [] }, // Event preferences
    role: { type: String, default: 'user' },  //User role ____ default is 'user'
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }], // RSVP'd events
});

module.exports = mongoose.model('User', UserSchema);
