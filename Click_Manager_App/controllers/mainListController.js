
const dbMain=require('../utils/dbMain'); 
const dbpubList= require('../utils/dbPubList');


exports.getAllLists = async (req, res) => {
    try {
        console.log("Fetching all lists...");
        const lists = await dbMain.getAllLists(); //   getAllLists => dbMain
        res.json(lists);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

exports.getListByName = async (req, res) => {
    try {
        console.log("con");
        const name = req.query.name; // query parameters
        const list = await dbMain.getListByName(name);
        console.log("in controller: " + list);
        if (list) {
            res.json(list);
        } else {
            res.status(404).json({ message: 'List not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

exports.createList = async (req, res) => {
    try {
        console.log("con");
        const { name, description, limit, creationDate, lastUpdatedDate, publisherAppList } = req.body;
        const listData = {
            name,
            description,
            limit,
            creationDate: new Date(creationDate),
            lastUpdatedDate: new Date(lastUpdatedDate),
            publisherAppList
        };
        console.log("list data: " + listData);
        const list = await dbMain.createListInDB(listData);
        res.json(list);
    } catch (err) {
        console.error("Error in createList controller:", err);
        res.status(500).send("Server Error");
    }
};

exports.deleteListByName = async (req, res) => {
    try {
        console.log("Deleting list by name...");
        const { name } = req.params;
        const deletedList = await dbMain.deleteListByName(name);
        if (!deletedList) {
            return res.status(404).json({ message: 'List not found' });
        }
        res.json({ message: 'List deleted successfully', deletedList });
    } catch (err) {
        console.error("Error in deleteListByName controller:", err);
        res.status(500).send("Server Error");
    }
};
exports.editLimitByName = async (req, res) => {
    try {
        const { listName, limit } = req.params;
        if (limit == null) {
            return res.status(400).json({ message: 'Limit is required' });
        }
        const updatedList = await dbMain.editLimitByName(listName, parseInt(limit));
        if (!updatedList) {
            return res.status(404).json({ message: 'List not found' });
        }
        res.json({ message: 'Limit updated successfully', updatedList });
    } catch (err) {
        console.error("Error in editLimitByName controller:", err);
        res.status(500).send("Server Error");
    }
};


// exports.searchByName= async (req, res) =>{
//  try{
    
//  }
//  catch (err) {
//      console.error(err);
//      res.status(500).send("Server Error");
//   }
// }




// exports.getListByName = async (req, res) => {
//     try {
//         const name = req.body.name; // query parameters
//         const list = await dbpubList.getListByName(name);
//         console.log("in controller: " + list);
//         if (list) {
//             res.json(list);
//         } else {
//             res.status(404).json({ message: 'List not found' });
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Server Error");
//     }
// };
