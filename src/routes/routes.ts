import { Application } from 'express';

const booksRoute = require('./booksRoutes');
const app: Application = require('express')();

app.use('/books', booksRoute);

module.exports = app;