const User = require('../models/User');
const { jwtSign } = require('../Utils/utils');

const register = async (name, username, password) => {
    let validate = await User.find({username:username});

    if  (!validate) {
        throw new Error ('This user is already taken'); 
    }

    let user = await User.create({name, username, password})

    return createToken(user)

}

const login = async (username, password) => {
    let user = await User.findOne({username:username});
    
    let valid = await user.validatePassword(password);

    if (!valid || !user) {
        throw new Error('Cannot find username or password'); 
    }

    return createToken(user)
   
}

const createToken = (user) => {
    let payload = {
        id:user._id,
        username:user.username
    }

    return jwtSign(payload);
};

module.exports = {
    register,
    login,
};