const router = require('express').Router();
const homeController = require('./controllers/home-controller');
const authController = require('./controllers/auth-controller');
const houseController = require('./controllers/house-controller');

router.use(homeController);
router.use(authController);
router.use('/house', houseController);

module.exports = router