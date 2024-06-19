const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Click_Manager_App/utils/db');
const listRoutes = require('./Click_Manager_App/routes/listRoutes');
//const publisherRoutes = require('./routes/publisherRoutes');

const app = express();

// חיבור למסד הנתונים
 connectDB();

// שימוש ב-body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// שימוש בנתיבים
app.use('/api', listRoutes);
//app.use('/api', publisherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// import express from 'express';
// import bodyParser from 'body-parser';
// import connectDB from './Click_Manager_App/utils/db';
// import listRoutes from './Click_Manager_App/routes/listRoutes';
// const app = express();

// // חיבור למסד הנתונים
// connectDB();

// // שימוש ב-body-parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // שימוש בנתיבים
// app.use('/api', listRoutes);


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
