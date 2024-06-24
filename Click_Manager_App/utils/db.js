const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://y4144246:YEHUDIT246@click-manager-app.xwzswku.mongodb.net/CMA',{
             
            useNewUrlParser: true,
            useUnifiedTopology: true

           // useFindAndModify: false
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }   
};

module.exports = connectDB;
