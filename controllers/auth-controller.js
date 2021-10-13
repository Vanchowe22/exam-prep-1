const router = require('express').Router();
const authService = require('../service/auth-service');


const renderRegister = (req, res) => {
    res.render('auth/register');
}

const postRegister = async (req, res) => {
    let {name, username, password, repeatPassword} = req.body;
    console.log(req.body);
    console.log(name, username, password);
    
    if(password!== repeatPassword){
        throw new Error('Repeat password was not the same');
    }

    let token = await authService.register(name, username, password);

    res.cookie('user', token);

    res.redirect('/')
}

router.route('/register')
    .get(renderRegister)
    .post(postRegister);

module.exports = router;