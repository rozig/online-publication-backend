const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const cons = require('consolidate');
const expressValidator = require('express-validator');
require('dotenv').config();

const authRoutes = require('./routes/AuthRoutes');
const postRoutes = require('./routes/PostRoutes');
const userRoutes = require('./routes/UserRoutes');
const commentRoutes = require('./routes/CommentRoutes');
const defaultRoutes = require('./routes/DefaultRoutes');

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const app = express();

app.set('x-powered-by', false);
app.set('trust proxy', true);
app.set('case sensitive routing', true);
app.set('strict routing', true);
app.set('view cache', true);
app.engine('html', cons.mustache);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));

app.use(cors());
app.use(express.json());
app.use(expressValidator());
app.use(helmet());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('*', defaultRoutes);

module.exports = app;
