const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    name: String,
    type: {
        type: String,
        enum: ['Apartament', 'Villa', 'House'],
        required: true,
    },
    year: Number,
    city: String,
    homeImage: String,
    description: String,
    availablePieces: Number,
    renderAHome: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    _owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const House = mongoose.model('House', houseSchema);

module.exports = House;