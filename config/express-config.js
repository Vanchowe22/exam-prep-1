const express = require('express');
const auth = require('../middlewares/auth-middleware');
const cookieParse = require('cookie-parser');


module.exports = (app) => {
    
    app.use(express.urlencoded({ extended: true }))

    app.use(cookieParse());

    app.use(express.static('./static'))

    app.use(auth)

}