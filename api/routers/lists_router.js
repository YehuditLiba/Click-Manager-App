const express=require('express');
const router=express.Router(); 

const{
    gelAllLists,
    CreatList,
    getItemByName,
    deleteItemByName
     }=require('../controllers/limit_list_controller');

module.exports = router;