const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const postRoutes = require('./routes/PostRoutes');

mongoose.connect('mongodb://localhost:27017/online_publication');

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/api/posts', postRoutes);

module.exports = app;
