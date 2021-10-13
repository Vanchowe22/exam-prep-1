const jwt = require('jsonwebtoken');
const { SECRET } = require('./constants');

exports.jwtSign = (token) => {
    return new Promise((resolve, reject) => {
        jwt.sign(token, SECRET, (err, decoded) => {
            if(err){
                reject(err)
            }else{
                resolve(decoded)
            }
        })
    })
}