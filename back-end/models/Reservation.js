const {  DataTypes } = require('sequelize');
const db = require('../db/conn');

const Reservation = db.define('Reservation', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    typeRoom: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    numberGuest: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    dateArrival: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },

    hourArrival: {
        type: DataTypes.TIME,
        allowNull: true,
    },

    turn: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    dayDeparture: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    monthDeparture: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    yearDeparture: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    freePickup: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

    specialRequest: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = Reservation;