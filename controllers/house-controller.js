const router = require('express').Router();
const houseService = require('../service/house-service');

const renderCreate = (req, res) => {
    res.render('house/create')
};

const postCreate = async (req, res) => {
    let body = req.body;

    await houseService.create(body, req.user.id)

    res.redirect('/')
};

const renderRentHouse = async (req, res) => {
    let data = await houseService.getAll();
    res.render('house/aprt-for-recent', { data });
};

const renderDetails = async (req, res) => {
    let data = await houseService.getOne(req.params.id);

    let validate = await houseService.houseCheck(data, req.user.id);
    
    //TODO: show who rented the house!

    res.render('details', {...data, ...validate});
};

const renderEdit = async (req, res) => {
    let data = await houseService.getOne(req.params.id);

    res.render('house/edit', data)
};

const postEdit = async (req, res) => {
    let data = req.body;

    await houseService.updateOne(data, req.params.id)

    res.redirect(`/house/${req.params.id}/details`);
};

const deleteHouse = async (req, res) => {
    await houseService.deleteOne(req.params.id)
    
    res.redirect('/')
}

const rentHouse = async (req, res) => {
    let id = req.params.id;
    
    await houseService.rentOne(req.user.id, id)

    res.redirect(`/house/${id}/details`)
}

router.route('/create')
    .get(renderCreate)
    .post(postCreate);

router.route('/rent')
    .get(renderRentHouse);

router.route('/:id/details')
    .get(renderDetails);

router.route('/:id/edit')
    .get(renderEdit)
    .post(postEdit);

router.route('/:id/delete')
    .get(deleteHouse)


router.get('/:id/rent', rentHouse)

module.exports = router;