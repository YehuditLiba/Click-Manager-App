const Clicklimit_list = require('../models/mainListModel');

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
        await Click.findByIdAndRemove(req.params.id);
        res.json({ message: 'List deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getAllLists = async (req, res) => {
    try {
        console.log("11");
        const lists = await Clicklimit_list.find({});
        console.log(lists);
        console.log("22");
        res.json(lists);
        console.log(lists);
    } catch (err) {

        res.status(500).send(err);
    }
};
