const mongoose = require('mongoose');
const limit_list_model=require('./limit_list_model');


const express = require('express');
const { create } = require('../models/limit_list_model');

 module.exports ={
   gelAllLists:(req,res)=>{
         limit_list_model.find().then((limit_list_model)=>{
             res.status(200).json({
                 limit_list_model
             }).catch(error => {
                 res.status(500).json({
                     error: error
                 })
             });
         })
   },

   CreatList:(req,res)=>{
       const { name, description, limit, publisherApps } = req.body;
       const limitListData = new dataLimitList({
         name,
         description,
         limit,
         createdTime,
         lastUpdatedTime,
         publisherAppList
       })
       limitListData.save().then(()=>{
        res.status(200).json({
            message:'Create list successfully'
       })
    })
      .catch(error =>{
        res.status(500).json({
           error: error
       }) 
    });
}
 
 }


module.exports = router;