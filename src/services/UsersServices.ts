const usersRepository = require('../repository/UsersRepository');

class UserService {
  async listAllUsers() {
    const users = await usersRepository.listUsers();
    return users;
  }

  async createUser(nome: string, email: string, password: string) {
    const user = await usersRepository.createUser(nome, email, password);
    return user;
  }
}

module.exports = UserService;