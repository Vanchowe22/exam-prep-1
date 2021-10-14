const router = require('express').Router();
const houseService = require('../service/house-service');

const renderCreate = (req, res) => {
    res.render('house/create')
}

const postCreate = async (req, res) => {
    let body = req.body;
    
    await houseService.create(body, req.user.id)
    
    res.redirect('/')
}

const renderRentHouse = async (req, res) => {
    let data = await houseService.getAll();
    res.render('house/aprt-for-recent', { data });
}

router.route('/create')
    .get(renderCreate)
    .post(postCreate)

router.route('/rent')
    .get(renderRentHouse)

module.exports = router;