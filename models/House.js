const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    type: {
        enum:['Apartament', 'Villa', 'House'],
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    homeImage:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    availablePieces:{
        type:Number,
        required:true,
    },
    renderAHome:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}) 

const User = mongoose.model('User', houseSchema);

module.exports = User;