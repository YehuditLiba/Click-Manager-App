const express = require('express'); 
const router = express.Router();
const listController= require('../controllers/mainListController'); 


router.post('/lists', listController.createList);
router.delete('/lists/:id', listController.deleteList);
router.get('/lists', listController.getAllLists);

module.exports = router;
