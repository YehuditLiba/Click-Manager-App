const express = require('express');
const cors = require('cors');
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
app.use(cors());

// Define Routes
app.use('/api', listRoutes);
//app.use('/api/publists', listRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

