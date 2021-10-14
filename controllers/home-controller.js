const router = require('express').Router();
const houseService = require('../service/house-service')

const home = async (req, res) => {
    let data = await houseService.getAll();
    res.render('home', { data });
}

router.get('/', home);

module.exports = router;