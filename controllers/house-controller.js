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

router.route('/create')
    .get(renderCreate)
    .post(postCreate)

module.exports = router;