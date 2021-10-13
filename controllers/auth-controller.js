const router = require('express').Router();

const renderRegister = (req, res) => {
    res.render('auth/register');
}

router.route('/register')
    .get(renderRegister)


module.exports = router;