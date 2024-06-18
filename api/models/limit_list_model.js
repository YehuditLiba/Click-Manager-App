const mongoose = require('mongoose');
const publisherAppItem = require('./pub_list_model');
const dataLimitList = mongoose.Schema({
    name: {type:'string',required: true},
    description: 'string',
    limit: 'integer',
    createdTime: new Date(),
    lastUpdatedTime: new Date(),
    publisherAppList: [publisherAppItem],
});
    //{ timestamps: { createDate: 'created_at', updatedDate: 'updated_at' } });



module.exports = mongoose.model('limit_list_model', dataLimitList);



//link
//mongodb+srv://y4144246:YEHUDIT246@click-manager-app.xwzswku.mongodb.net/
