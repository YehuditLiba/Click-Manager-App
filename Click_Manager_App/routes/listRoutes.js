const express = require('express');
const router = express.Router();
const listController = require('../controllers/mainListController');
const publisherlistController = require('../controllers/publisherlistController');


router.post('/Addlists',listController.createList);
router.delete('/lists/:name', listController.deleteListByName);
router.get('/lists', listController.getAllLists);
router.get('/Pub_list/by_name', listController.getListByName);
router.put('/lists/:name/update', listController.updateList);

//router.get('searchByName', listController.searchByName);

router.get('/PublistByName', publisherlistController.getList);
router.post('/addPublisherToList', publisherlistController.addObjToList);
router.delete('/deletePublisher/:name/:publisherName', publisherlistController.deletePublisher);
router.put('/editDescription', publisherlistController.editDescriptionByName);


module.exports = router;
