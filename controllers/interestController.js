const {Interest} = require('../models');

// Fetch all interests
const getInterests = async (req, res) => {
  try {
    const interests = await Interest.findAll();
    res.status(200).json(interests);
  } catch (error) {
    console.error('Error fetching interests:', error);
    res.status(500).json({ error: 'Failed to fetch interests.' });
  }
};

// // Create a new interest
// const createInterest = async (req, res) => {
//   const { userId, eventId, status } = req.body;
//   try {
//     const interest = await Interest.create({ userId, eventId, status });
//     res.status(201).json(interest);
//   } catch (error) {
//     console.error('Error creating interest:', error);
//     res.status(500).json({ error: 'Failed to create interest.' });
//   }
// };

const createInterest = async (req, res) => {
    const { userId, eventId, status } = req.body;

        try {
            // Find an existing interest
            const existingInterest = await Interest.findOne({
            where: { userId, eventId },
            });

            if (existingInterest) {
            // If it exists, update the status
            existingInterest.status = status || 'interested'; // Use the provided status or default to 'interested'
            await existingInterest.save();
            return res.status(200).json({
                message: 'Interest updated successfully.',
                interest: existingInterest,
            });
            }

            // If it doesn't exist, create a new interest
            const newInterest = await Interest.create({ userId, eventId, status: status || 'interested' });
            return res.status(201).json({
            message: 'Interest created successfully.',
            interest: newInterest,
            });
        } catch (error) {
            console.error('Error creating or updating interest:', error);
            return res.status(500).json({ error: 'Failed to process interest.' });
        }
  };

module.exports = { getInterests, createInterest };
