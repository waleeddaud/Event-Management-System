const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
    class Event extends Model {}
    Event.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        date: { type: DataTypes.DATE, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false },
        capacity: { type: DataTypes.INTEGER, allowNull: false },
        organizerId: { type: DataTypes.INTEGER, allowNull: false },
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'Event',
      }
    );
    return Event;
  };
  