const router = require('express').Router();

const renderRegister = (req, res) => {
    console.log(req);
    res.render('auth/register');
}

router.route('/register')
    .get(renderRegister)


module.exports = router;