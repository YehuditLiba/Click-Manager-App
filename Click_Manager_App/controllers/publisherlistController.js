
const dbpubList = require('../utils/dbPublist');

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