const mainListModel=require('../models/mainListModel');
const db=require('../utils/db');

class dbMain{

    async getAllLists() {
        try {
            const lists = await mainListModel.find({});
            return lists;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getAllListsString() {
        try {
            const lists = await mainListModel.find({});
            return lists.toString();
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

     getListByName = async (name) => {
    try {
        const MainList = await mainListModel.findOne({ 'publisherAppList.name': name });
        if (!MainList) return "Main list not found";
        const pubItem = MainList.publisherAppList.find(item => item.name === name);
        if (pubItem) return pubItem;
        else return "Publisher not found";
    } catch (error) {
        console.error(error);
        throw error;
    }
    }

     createListInDB = async (listData) => {
        try {
            const newList = new mainListModel(listData);
            return await newList.save();
        } catch (err) {
            console.error("Error saving list to DB:", err);
            throw err;
        }
    };

    async deleteListByName(name) {
        try {
            const deletedList = await mainListModel.findOneAndDelete({ name });
            return deletedList;
        } catch (err) {
            console.error("Error deleting list from DB:", err);
            throw err;
        }
    }
    async editLimitByName(name, limit) {
        try {
            console.log("name: " + name);
            console.log("limit: " + limit);
            const updatedList = await mainListModel.findOneAndUpdate(
                { name },
                { $set: { limit, lastUpdatedDate: new Date() } },
                { new: true }
            );
            return updatedList;
        } catch (err) {
            console.error("Error updating limit in DB:", err);
            throw err;
        }
    }

}
 module.exports = new dbMain();
