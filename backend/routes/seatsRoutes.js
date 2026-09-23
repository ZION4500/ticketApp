const express = require('express');
const router = express.Router();
const seatsController = require('../controller/seatsController');

router.post('/', seatsController.createSeat);
router.get('/', seatsController.getSeats);
router.get('/:id', seatsController.getSeat);
router.put('/:id', seatsController.updateSeat);
router.delete('/:id', seatsController.deleteSeat);

module.exports = router;