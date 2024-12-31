const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
module.exports = (sequelize, DataTypes) => {
    class Interest extends Model {}
    Interest.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        userId: { type: DataTypes.INTEGER, allowNull: false },
        eventId: { type: DataTypes.INTEGER, allowNull: false },
        status: {
          type: DataTypes.ENUM('interested', 'joined'),
          defaultValue: 'interested',
        },
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'Interest',
        timestamps: true,
      }
    );
    return Interest;
  };
  
