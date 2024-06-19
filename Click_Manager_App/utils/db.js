const mongoose = require('mongoose');




const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://y4144246:YEHUDIT246@click-manager-app.xwzswku.mongodb.net/CMA',
             {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }   
};

module.exports = connectDB;





// const mongoose = require('mongoose');
// //const { MongoClient } = require('mongodb');

// const DB_PASSWORD = 'ujVEmuTPI26mYNbs';
// const DB_NAME = 'Click-Manager-App';
// const DB_URL = `mongodb+srv://y4144246:YEHUDIT246@click-manager-app.xwzswku.mongodb.net/limit_list`;

// class DBConnect {
//     constructor() {
//         //this.dbConn = new MongoClient(DB_URL);
//     }

//     async init() {
//         const res = await this.dbConn.connect();
//         console.log("DB is connected");
//     }

//     getDB(dbName = DB_NAME) {
//         return this.dbConn.db(dbName);
//     }

//     async terminate() {
//         await this.dbConn.close();
//         console.log("DB is closed");
//     }
// }

// module.exports = DBConnect;
