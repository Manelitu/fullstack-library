import { Router } from 'express';

const route: Router = require('express')();
const UsersControllers = require('../controllers/UsersControllers');
const auth = require('../middlewares/auth');

const usersControllers = new UsersControllers();

route.get('/getAllUsers', usersControllers.listAllUsers);

route.post('/createUser', usersControllers.createUser);

route.put('/updateUser/:id', auth, usersControllers.updateUser);

route.delete('/deleteUser/:id', auth, usersControllers.deleteUser);

module.exports = route;