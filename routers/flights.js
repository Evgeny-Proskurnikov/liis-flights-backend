const router = require('express').Router();
const { getFlights, createFlight, deleteFlight } = require('../controllers/flights');
const { validateGetFlights, validateCreateFlight, validateDelFlight } = require('../middlewares/routers-validator');

router.get('/', validateGetFlights, getFlights);
router.post('/', validateCreateFlight, createFlight);
router.delete('/:flightId', validateDelFlight, deleteFlight);

module.exports = router;
