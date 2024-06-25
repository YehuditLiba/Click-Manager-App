const express = require('express');
const router = express.Router();
const listController = require('../controllers/mainListController.js');
const publisherlistController = require('../controllers/publisherlistController');


router.post('/Addlists',listController.createList);
router.delete('/lists/:name', listController.deleteListByName);
router.get('/lists', listController.getAllLists);
router.get('/Pub_list/by_name', listController.getListByName);
router.put('/lists/:name/:limit', listController.editLimitByName); 
// router.get('/validate/:name', listController.validateString)
//router.get('/validate', listController.validateString);
//router.get('searchByName', listController.searchByName);



router.get('/PublistByName', publisherlistController.getList);

module.exports = router;
