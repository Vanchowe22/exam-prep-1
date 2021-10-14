const { jwtVerify } = require("../Utils/utils")

const auth = (req, res, next) => {
    let token = req.cookies['user']

    jwtVerify(token)
        .then(unpacked => {
            req.user = unpacked;
            
            res.locals.user = unpacked;

            next(); 
        })
        .catch(err => {
            next();
        })

}

module.exports = auth;