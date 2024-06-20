const pubListModel = require('../models/pubListModel');
const mainListModel = require('../models/mainListModel');
const db= require('../utils/db');

class dbList {
    
    getPublisherlist = async (name)=>{
        try{
              console.log(name);
              const MainList=await mainListModel.find({"name": name});
              console.log(MainList);
              if (!MainList) return "Main list not found";
              const pubList = MainList[0].publisherAppList;
              console.log(pubList);
            //const pubList = MainList.publisherAppList.find();
              if(pubList) return pubList;
              else return "not found";
           }
        catch (error) { throw console.error(error) }
    }
}
const dbList1=new dbList();
module.exports = dbList1;
