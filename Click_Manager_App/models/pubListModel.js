const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pubLisherAppList = new Schema({
    name: { type: String, required: true },
    description: { type: String }
})

module.exports = mongoose.model('pubLisherAppList', pubLisherAppList);
