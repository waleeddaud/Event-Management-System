'use strict';

const fs = require('fs');
const path = require('path');
const sequelize = require('../config/database'); // Import the Sequelize instance
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

// Dynamically load all models
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Define associations
const { User, Event, Interest } = db;

User.hasMany(Event, { foreignKey: 'organizerId' });
Event.belongsTo(User, { foreignKey: 'organizerId' });

User.belongsToMany(Event, { through: Interest, foreignKey: 'userId', as: 'interestedEvents' });
Event.belongsToMany(User, { through: Interest, foreignKey: 'eventId', as: 'attendees' });

// Attach Sequelize and models to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

/*
run to see its functionality
(async () => {
  try {
    await sequelize.sync({ force: true }); // WARNING: This drops tables and recreates them
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  } finally {
    await sequelize.close();
  }
})();
*/
module.exports = db;


// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;


