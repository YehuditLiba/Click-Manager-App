const express = require('express');
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
