const Clicklimit_list = require('../models/mainListModel');
const dbMain=require('../utils/dbMain');  

exports.createList = async (req, res) => {
    try {
        const { name, description, limit, creationDate, lastUpdatedDate, publisherAppList } = req.body;
        const newList = new Clicklimit_list({
            name,
            description,
            limit,
            creationDate: new Date(creationDate),
            lastUpdatedDate: new Date(lastUpdatedDate),
            publisherAppList
        });
        const list = await newList.save();
        res.json(list);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteList = async (req, res) => {
    try {
        await Click.findByIdAndRemove(req.params.name);
        res.json({ message: 'List deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
};

// exports.getAllLists = async (req, res) => {
//     try {
//         console.log("11");
//         const lists = await Clicklimit_list.find({});
//         console.log(lists);
//         console.log("22");
//          res.json(lists);
//         console.log(lists);
//     } catch (err) {

//         res.status(500).send(err);
//     }
// };


exports.getAllLists = async (req, res) => {
    try {
        console.log("Fetching all lists...");
        const lists = await dbMain.getAllLists(); // קריאה לפונקציה getAllLists מ-dbMain
        res.json(lists);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

exports.getListByName = async (req, res) => {
    try {
        const name = req.query.name; // query parameters
        const list = await dbpubList.getListByName(name);
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
