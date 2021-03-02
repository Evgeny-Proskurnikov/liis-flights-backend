const { Joi, celebrate } = require('celebrate');

const validateGetFlights = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
});

const validateCreateFlight = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
  body: Joi.object().keys({
    departure: Joi.string().required(),
    arrival: Joi.string().required(),
    date: Joi.string().required(),
    time: Joi.string().required(),
    airlines: Joi.string().required(),
    price: Joi.string().required(),
  }),
});

const validateDelFlight = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
  params: Joi.object().keys({
    flightId: Joi.string().hex().length(24).required(),
  }),
});

const validateGetUserMe = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
});

const validateSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const validateSignup = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
});

module.exports = {
  validateCreateFlight,
  validateDelFlight,
  validateGetFlights,
  validateGetUserMe,
  validateSignin,
  validateSignup,
};
