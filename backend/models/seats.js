// models/Seat.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class seats extends Model {}

seats.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    showtimeId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'Showtimes', key: 'id' },
    },
    row: {
      type: DataTypes.STRING, // 'A', 'B', 'C'...
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER, // 1–8
      allowNull: false,
    },
    label: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.row}${this.number}`; // 'A1', 'B4', etc.
      },
    },
    status: {
      type: DataTypes.ENUM('available', 'held', 'booked'),
      defaultValue: 'available',
    },
    heldBy: {
      type: DataTypes.STRING, // session/user id holding the seat
      allowNull: true,
    },
    heldUntil: {
      type: DataTypes.DATE, // hold expires after ~5-10 min
      allowNull: true,
    },
    bookingId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: { model: 'Bookings', key: 'id' },
    },
  },
  {
    sequelize,
    modelName: 'Seat',
    indexes: [
      { unique: true, fields: ['showtimeId', 'row', 'number'] },
    ],
  }
);

module.exports = Seat;