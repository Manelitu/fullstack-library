const usersRepository = require('../repository/UsersRepository');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

class LoginServices {
  async signin(email: string, password: string) {
    const user = await usersRepository.findUserByEmail(email);

    if (!user) throw new Error('User not found');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error('Incorrect password');

    let token = null;

    try {
      token = sign({
        id: user.id,
        nome: user.nome,
        email: user.email,
      }, process.env.JWT_SECRET, { expiresIn: '1d' });
    } catch (err) {
      throw new Error('Error generating token');
    }

    return token;
  }
}

module.exports = LoginServices;

export { };
