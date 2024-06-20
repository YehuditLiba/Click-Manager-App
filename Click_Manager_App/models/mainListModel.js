const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const publisherAppList = new Schema({
    name: { type: String, required: true },
    description: { type: String }
});

const limit_list = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    limit: { type: Number, required: true },
    creationDate: { type: Date, required: true },
    lastUpdatedDate: { type: Date, required: true },
    publisherAppList: [publisherAppList]
});

module.exports = mongoose.model('limit_lists', limit_list);

