
const dbpubList = require('../utils/dbPublist');
const mainListModel=require('../models/mainListModel');
exports.getList = async (req, res) => {
  try {
    //by_body
    console.log("hi")
    const name = req.body.name;
    console.log("this is the name" + name);
    const list = await dbpubList.getPublisherlist(name);
    console.log("in controller" + list);
    res.send(list);
  }
  catch (err) {
    throw console.error(error);
  }
};

exports.addObjToList = async (req, res) => {
  try {
    const { name, newPublisher } = req.body;
    const list = await mainListModel.findOne({ name: name, 'publisherAppList.name': newPublisher.name });
    if (list) {
      console.log(`Publisher ${newPublisher.name} already exists in list ${name}`);
      res.status(400).send({ message: `Publisher ${newPublisher.name} already exists in list ${name}` });
    } else {
      const result = await mainListModel.findOneAndUpdate(
        { name: name },
        { $push: { publisherAppList: newPublisher } },
        { new: true, useFindAndModify: false }
      );
      if (result) {
        console.log(`Successfully added a new publisher ${newPublisher.name} to the list with name ${name}`);
        res.status(200).send(result);
      } else {
        console.log(`No list found with name ${name}`);
        res.status(404).send({ message: `No list found with name ${name}` });
      }
    }
  } catch (error) {
    console.error(`Error occurred while adding a publisher: ${error}`);
    res.status(500).send({ message: `Error occurred while adding a publisher: ${error.message}` });
  }
};
exports.deletePublisher = async (req, res) => {
  const name = req.params.name; // מקבל את השם של הרשימה הראשית
  const publisherName = req.params.publisherName; // מקבל את שם המוציא
  try {
    const result = await dbpubList.deletePublisher(name, publisherName);

    if (result) {
      res.status(200).json({ message: 'Publisher deleted successfully' });
    } else {
      res.status(404).json({ message: 'Publisher not found' });
    }
  } catch (error) {
    console.error('Error deleting publisher:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.editDescriptionByName = async (req, res) => {
  try {
    const { name, publisherName, newDescription } = req.body;
    const result = await mainListModel.findOneAndUpdate(
      { name: name, 'publisherAppList.name': publisherName },
      { $set: { 'publisherAppList.$.description': newDescription } },
      { new: true, useFindAndModify: false }
    );
    if (result) {
      console.log(`Successfully updated description for publisher ${publisherName} in list ${name}`);
      res.status(200).send(result);
    } else {
      console.log(`No list found with name ${name} or no publisher found with name ${publisherName}`);
      res.status(404).send({ message: `No list found with name ${name} or no publisher found with name ${publisherName}` });
    }
  } catch (error) {
    console.error(`Error occurred while updating description: ${error}`);
    res.status(500).send({ message: `Error occurred while updating description: ${error.message}` });
  }
};