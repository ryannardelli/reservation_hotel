const express = require('express');
const router = express.Router()
const Main = require('../controllers/Main');

router.post('/create', Main.createReservation);

module.exports = router;