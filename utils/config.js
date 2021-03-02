const DEV_SECRET = 'dev-secret';
const DEV_DB_HOST = 'mongodb://localhost:27017/flightsdb';
const SALT_ROUNDS = 10;
const HOSTS = [
  'http://localhost:3000',
  'http://www.api.liisflights.students.nomoreparties.xyz',
  'https://www.api.liisflights.students.nomoreparties.xyz',
  'http://api.liisflights.students.nomoreparties.xyz',
  'https://api.liisflights.students.nomoreparties.xyz',
  'http://www.liisflights.students.nomoreparties.xyz',
  'https://www.liisflights.students.nomoreparties.xyz',
  'http://liisflights.students.nomoreparties.xyz',
  'https://liisflights.students.nomoreparties.xyz',
];

module.exports = {
  DEV_SECRET,
  DEV_DB_HOST,
  SALT_ROUNDS,
  HOSTS,
};
