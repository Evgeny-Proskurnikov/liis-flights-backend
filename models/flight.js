const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  airlines: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    select: false, // по умолчанию не будет возвращаться из базы
    required: true,
  },
});

// в схеме select: false не срабатывает, поэтому модифицируем объект ответа
// баг метода create в mongoose
flightSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.owner;
  return obj;
};

const flightModel = mongoose.model('flight', flightSchema);

module.exports = flightModel;
