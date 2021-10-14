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

const renderLogin = (req, res) => {
    res.render('auth/login')
}

const postLogin = async (req, res) => {
    let {username, password} = req.body;

    let token = await authService.login(username, password)

    res.cookie('user', token);

    res.redirect('/')
}

const logout = (req, res) => {
    res.clearCookie('user').redirect('/')
}

router.route('/register')
    .get(renderRegister)
    .post(postRegister);

router.route('/login')
    .get(renderLogin)
    .post(postLogin)

router.get('/logout', logout)

module.exports = router;