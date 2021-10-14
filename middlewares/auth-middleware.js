const { jwtVerify } = require("../Utils/utils")

const auth = (req, res, next) => {
    let token = req.cookies['user']

    if (!token) {
        req.user = false;
        return next();
    }

    jwtVerify(token)
        .then(unpacked => {
            req.user = unpacked;
            
            res.locals.user = unpacked;

            next(); 
        })
        .catch(err => {
            return res.redirct('/login')
        })

}

module.exports = auth;