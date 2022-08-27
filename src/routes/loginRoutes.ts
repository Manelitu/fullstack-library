import { Router } from 'express';

const route: Router = require('express')();
const LoginController = require('../controllers/LoginControllers');

const loginController = new LoginController();

route.post('/signin', loginController.signin);

module.exports = route;
