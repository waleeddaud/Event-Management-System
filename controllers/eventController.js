const {Event} = require('../models');

// Fetch all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events.' });
  }
};

// Create a new event
const createEvent = async (req, res) => {
  const { title, description, date, location, capacity, organizerId } = req.body;
  try {
    //later on i will add functionality where the organizerId will be checked if its belonging 
    //to organizer and if not we will return an error
    const event = await Event.create({ title, description, date, location, capacity, organizerId });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event.' });
  }
};

module.exports = { getEvents, createEvent };
