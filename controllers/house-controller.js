const router = require('express').Router();

const renderCreate = (req, res) => {
    res.render('house/create')
}

const postCreate = async (req, res) => {
    let body = req.body;
}

router.route('/create')
    .get(renderCreate);

module.exports = router;