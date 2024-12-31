const express = require('express');
const bodyParser = require('body-parser');
// No need inhere i think 
// const { sequelize, User, Event, Interest } = require('./models'); // Importing from index.js
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const interestRoutes = require('./routes/interestRoutes');

const app = express();

// Middleware
app.use(express.json());

 // Routes
app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/interests', interestRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
module.exports = app;
