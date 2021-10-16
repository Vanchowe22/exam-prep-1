const router = require('express').Router();
const houseService = require('../service/house-service')

const home = async (req, res) => {
    let data = await houseService.getAll();
    res.render('home', { data });
}

const getSearch = async (req, res) => {
    let search = req.query;
    
    if(search.name){
        let data = await houseService.search(search.name);
        console.log(1);
        res.render('search', { data })
    }else{
        res.render('search')
    }

};

router.get('/', home);
router.get('/search', getSearch)

module.exports = router;