const router = require('express').Router();

const renderCreate = (req, res) => {
    res.render('house/create')
}

router.route('/create')
    .get(renderCreate);

module.exports = router;