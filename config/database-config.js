const mongoose = require('mongoose');

const initDb = () => mongoose.connect('mongodb://localhost:27017/prep');

module.exports = initDb;