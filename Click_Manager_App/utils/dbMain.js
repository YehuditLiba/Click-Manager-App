const mainListModel=require('../models/mainListModel');
const db=require('../utils/db');

class dbMain{

    async getAllLists() {
        try {
            const lists = await mainListModel.find({});
            return lists.toString();
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
}
 module.exports = new dbMain();
