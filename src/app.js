const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const expressValidator = require('express-validator');
require('dotenv').config();

const authRoutes = require('./routes/AuthRoutes');
const postRoutes = require('./routes/PostRoutes');
const userRoutes = require('./routes/UserRoutes');

const { checkAuthentication } = require('./middlewares/AuthMiddlewares');

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const app = express();

app.use(cors());
app.use(express.json());
app.use(expressValidator());
app.use(helmet());

app.use('/api/auth', authRoutes);
app.use('/api/posts', checkAuthentication, postRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
