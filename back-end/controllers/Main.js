const Reservation = require('../models/Reservation');

module.exports = class mainController {
    static async createReservation (req, res) {
        try {
            const {
                firstName,
                lastName,
                email,
                typeRoom,
                numberGuest,
                dateArrival,
                hourArrival,
                turn,
                dayDeparture,
                mouthDeparture,
                yearDeparture,
                freePickup,
                specialRequest,
              } = req.body;

              const reservation = await Reservation.create({
                firstName,
                lastName,
                email,
                typeRoom,
                numberGuest,
                dateArrival,
                hourArrival,
                turn,
                dayDeparture,
                mouthDeparture,
                yearDeparture,
                freePickup,
                specialRequest,
              });

              res.status(201).json({ message: 'Reserva criada com sucesso!', reservation });
        } catch(e) {
            console.log('Erro ao criar a reserva', e);
        }
    }
}