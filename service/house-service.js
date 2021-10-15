const House = require('../models/House');

const create = ({ name, type, year, city, homeImage, description, availablePieces }, _owner) => House.create({ name, type, year, city, homeImage, description, availablePieces, _owner });

const getAll = () => House.find().populate('renderAHome').lean();

const getOne = (id) => House.findById(id).lean();

const updateOne = ({ name, type, year, city, homeImage, description, availablePieces }, id) => House.findByIdAndUpdate(id, { name, type, year, city, homeImage, description, availablePieces }, { runValidators: true })

const deleteOne = (id) => House.findByIdAndDelete(id);

const rentOne = async (id, houseId) => {
    const house = await House.findById(houseId)

    house.renderAHome.push(id);

    house.availablePieces-=1;
    
    return house.save();
};

const houseCheck = async (house, userId) => {
    let isOwn = house._owner == userId
    
    let availableSpace = house.availablePieces !==0;

    let alreadyRented = house.renderAHome.some(x => x == userId);

    return {
        isOwn,
        availableSpace,
        alreadyRented
    }
};


module.exports = {
    create,
    getAll,
    getOne,
    updateOne,
    deleteOne,
    rentOne,
    houseCheck,
}