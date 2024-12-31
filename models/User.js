const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
 
module.exports = (sequelize, DataTypes) => {
    class User extends Model {}
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, unique: true, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        role: {
          type: DataTypes.ENUM('attendee', 'organizer', 'admin'),
          defaultValue: 'attendee',
        },
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'User',
      }
    );
    return User;
  };
  