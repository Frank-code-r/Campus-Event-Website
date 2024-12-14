const express = require('express');
const jwt = require('jsonwebtoken');
const Event = require('../event');
const User = require('../user');

const router = express.Router();

// Middleware for verifying JWT tokens
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

// Middleware to check if user is an admin
const verifyAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access restricted to admins only' });
    }
    next();
};

// 1. For creation of a New Event (Admin Only)
router.post('/create', verifyToken, verifyAdmin, async (req, res) => {
    const { name, date, time, location, capacity, description } = req.body;
    try {
        const newEvent = new Event({
            name,
            date,
            time,
            location,
            capacity,
            availableSeats: capacity,
            description,
        });
        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. List All Events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. RSVP to an Event
router.post('/rsvp/:id', verifyToken, async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        if (event.availableSeats <= 0) {
            return res.status(400).json({ message: 'No available seats left' });
        }

        // Update available seats
        event.availableSeats -= 1;
        await event.save();

        // Add event to user's profile
        const user = await User.findById(req.user.id);
        user.events = user.events || [];
        user.events.push(event._id);
        await user.save();

        res.json({ message: 'RSVP successful', event });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
