
const dbpublist = require('../utils/dbPublist.js');

exports.getList = async (req, res) => {
  try {
    //by_body
    console.log("hi")
    const name = req.query.name;
    console.log("this is the name" + name);
    const list = await dbpublist.getPublisherlist(name);
    console.log("in controller" + list);
    res.send(list);
  }
  catch (err) {
    throw console.error(error);
  }
};