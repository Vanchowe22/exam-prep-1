const House = require('../models/House');

const create = ({ name, type, year, city, homeImage, description, availablePieces }, _owner) => House.create({ name, type, year, city, homeImage, description, availablePieces, _owner });

const getAll = () => House.find().lean();

const getOne = (id) => House.findById(id).lean();

const updateOne = ({ name, type, year, city, homeImage, description, availablePieces }, id) => House.findByIdAndUpdate(id, { name, type, year, city, homeImage, description, availablePieces }, { runValidators: true })

const deleteOne = (id) => House.findByIdAndDelete(id);

module.exports = {
    create,
    getAll,
    getOne,
    updateOne,
    deleteOne,
}