const User = require('../models/User');
const { jwtSign } = require('../Utils/jwtSign');

const register = async (name, username, password) => {
    let validate = await User.find({username:username});

    if  (!validate) {
        throw new Error ('This user is already taken'); 
    }

    let user = await User.create({name, username, password})
    
    let payload = {
        id:user._id,
        username:user.username
    }

    return jwtSign(payload).catch(err => console.log(err));
}

module.exports = {
    register,
};