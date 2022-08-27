import { Router } from 'express';

const route: Router = require('express')();
const UsersControllers = require('../controllers/UsersControllers');

const usersControllers = new UsersControllers();

route.get('/getAllUsers', usersControllers.listAllUsers);

route.post('/createUser', usersControllers.createUser);

module.exports = route;