const { User, Event, Interest } = require('./models');


// (async () => {
//   const user = await User.create({ name: 'John Doe', email: 'john@example.com', password: '1234' });
//   console.log(user);
// })();



//Event test
/*
(async () => {
  
    try {  
      // Create a sample event
      const event = await Event.create({
        title: 'Tech Conference 2024',
        description: 'A conference about emerging technologies.',
        date: new Date('2024-06-15'),
        location: 'San Francisco, CA',
        capacity: 500,
        organizerId: 1, // Assuming organizerId 1 exists or can be mocked
      });
      console.log('Event created:', event.toJSON());
  
      // Fetch all events
      const events = await Event.findAll();
      console.log('All Events:', events.map((e) => e.toJSON()));
    } catch (error) {
      console.error('Error testing Event model:', error);
    } 
  })();
  */

//Interest test
(async () => {
    try {
      // Create a sample interest
      const interest = await Interest.create({
        userId: 1, // Assuming userId 1 exists or can be mocked
        eventId: 1, // Assuming eventId 1 exists or can be mocked
      });
      console.log('Interest created:', interest.toJSON());
  
      // Fetch all interests
      const interests = await Interest.findAll();
      console.log('All Interests:', interests.map((i) => i.toJSON()));
    } catch (error) {
      console.error('Error testing Interest model:', error);
    }
  })();

