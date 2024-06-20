const express = require('express'); 
const router = express.Router();
const listController= require('../controllers/mainListController'); 
const publisherlistController= require('../controllers/publisherlistController');


router.post('/lists', listController.createList);
router.delete('/lists/:name', listController.deleteList);
router.get('/lists', listController.getAllLists);
router.get('/Pub_list/by_name', listController.getListByName);
//router.get('searchByName', listController.searchByName);

router.get('/Publist', publisherlistController.getList);

module.exports = router;

