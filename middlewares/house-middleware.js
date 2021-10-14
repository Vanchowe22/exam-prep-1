const houseService = require('../service/house-service');

exports.isOwner = (req, res, next) => {
    let house = houseService.getOne(req.params.id);

    if(house._owner == req.user.id){
        req.house = house;
        next();
    }else{
        // next('You are not authorized')
        next();
    }
}
