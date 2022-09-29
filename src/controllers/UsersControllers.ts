import { Request, Response } from 'express';
const UsersServices = require('../services/UsersServices');

const usersService = new UsersServices();

class UsersController {
  async listAllUsers(req: Request, res: Response) {
    try {
      const users = await usersService.listAllUsers();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async createUser(req: Request, res: Response) {
    const { nome, email, password } = req.body;
    try {
      const user = await usersService.createUser(nome, email, password);
      return res.status(201).json(user);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    let { nome, email, password } = req.body;
    
    nome = nome || '';
    email = email || '';
    password = password || '';

    try {
      const user = await usersService.updateUser(id, nome, email, password);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await usersService.deleteUser(id);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}

module.exports = UsersController;