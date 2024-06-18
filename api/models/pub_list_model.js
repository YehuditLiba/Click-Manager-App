const mongoose = require('mongoose');
const publisherAppItem= new mongoose.Schema({
    name: 'string',
    description: 'string',
},
    { timestamps: { createDate: 'created_at', updatedDate: 'updated_at' } });

//const AppItemModel = mongoose.model('publisherAppItem', publisherAppItem);

module.exports = {
    publisherAppItem
}