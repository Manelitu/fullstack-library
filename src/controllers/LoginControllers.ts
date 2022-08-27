import { Request, Response } from 'express';
const LoginService = require('../services/LoginServices');

const loginService = new LoginService();

class LoginController {
  async signin(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await loginService.signin(email, password);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(401).send({ error: err });
    }
  };
}

module.exports = LoginController;
