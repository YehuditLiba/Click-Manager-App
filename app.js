const express = require('express');
<<<<<<< HEAD
const app = express();
// import list_router from './src/routers/lists_router.js';

app.get('/', (req, res)=> {
    res.status(200).json({
        message:'Success'})
 });
app.use(express.json());
app.use(list_router);

const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://y4144246:YEHUDIT246@click-manager-app.xwzswku.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
=======
const bodyParser = require('body-parser');
const connectDB = require('./Click_Manager_App/utils/db');
const listRoutes = require('./Click_Manager_App/routes/listRoutes');
//const publisherRoutes = require('./routes/publisherRoutes');

const app = express();

// Connect Database
 connectDB();

// שימוש ב-body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define Routes
app.use('/api', listRoutes);
//app.use('/api/publists', listRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

>>>>>>> master
