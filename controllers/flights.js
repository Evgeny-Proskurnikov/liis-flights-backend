const Flight = require('../models/flight');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');
const { NOT_FOUND_CARD, FORBIDDEN, DEL_SUCCESS } = require('../utils/constants');

// получение всех карточек
module.exports.getFlights = (req, res, next) => {
  Flight.find({ owner: req.user._id })
    .then((data) => res.send(data))
    .catch(next); // эквивалентна .catch(err => next(err));
};

// создание карточки
module.exports.createFlight = (req, res, next) => {
  const {
    departure, arrival, date, time, airlines, price,
  } = req.body;

  Flight.create({
    departure, arrival, date, time, airlines, price, owner: req.user._id,
  })
    .then((flight) => res.status(200).send(flight))
    .catch(next);
};

// удаление карточки
module.exports.deleteFlight = (req, res, next) => {
  const { flightId } = req.params;

  Flight.findById(flightId).select('+owner')
    .orFail(new NotFoundError(NOT_FOUND_CARD))
    .then((flight) => {
      if (flight.owner.toString() !== req.user._id) { // свойство user добавлено при авторизации
        throw new ForbiddenError(FORBIDDEN);
      }
      return Flight.deleteOne({ _id: flightId })
        .then((response) => {
          if (response.deletedCount !== 0) {
            return res.status(200).send({ message: DEL_SUCCESS });
          }
          throw new NotFoundError(NOT_FOUND_CARD);
        })
        .catch(next);
    })
    .catch(next);
};
