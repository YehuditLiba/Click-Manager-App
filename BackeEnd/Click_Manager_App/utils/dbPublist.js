const pubListModel = require('../models/pubListModel');
const mainListModel = require('../models/mainListModel');
const db = require('../utils/db');

class dbList {
    
async getPublisherlist(name){
      try{
             console.log(name);
            const MainList=await mainListModel.find({"name": name});
            console.log(MainList);
            if (!MainList) return "Main list not found";
            const pubList = MainList[0].publisherAppList;
            console.log(pubList);
              if(pubList) return pubList;
              else return "not found";
           }
      catch (error) { throw console.error(error) }
    }
async addObjToList(name, newPublisher) {
  try {
    const result = await mainListModel.findOneAndUpdate(
      { name: name },
      { $push: { publisherAppList: newPublisher } },
      { new: true, useFindAndModify: false }
    );
    if (result) {
      console.log(`Successfully added a new publisher to the list with name ${name}`);
      return result;
    } else {
      console.log(`No list found with name ${name}`);
      return null;
    }
  } catch (error) {
    console.error(`Error occurred while adding a publisher: ${error}`);
    throw error;
  }
}
async deletePublisher(name, publisherName) {
  try {
    const result = await mainListModel.findOneAndUpdate(
      { name: name },
      { $pull: { publisherAppList: { name: publisherName } } },
      { new: true, useFindAndModify: false }
    );
    return result;
  } catch (error) {
    console.error(`Error occurred while deleting publisher: ${error}`);
    throw error;
  }
}

async findPublisherByName(name) {
  try {
    const publisher = await pubListModel.findOne({ name: name });
    return publisher;
  } catch (error) {
    console.error('Error finding publisher by name:', error);
    throw error;
  }
}
async updateDescriptionByName(name, newDescription) {
  try {
    const updatedPublisher = await pubListModel.findOneAndUpdate(
      { name: name },
      { $set: { description: newDescription } },
      { new: true, useFindAndModify: false }
    );
    return updatedPublisher;
  } catch (error) {
    console.error('Error updating publisher description by name:', error);
    throw error;
  }
}
};




const dbList1=new dbList();
module.exports = dbList1;
