const prisma = require('../database/prismaClient');
const { v4: uuidv4 } = require('uuid');
const { hash } = require('bcrypt');

const findUserByEmail = async (email: string) => {
  const user = await prisma.users.findUnique({
    where: { email },
  });
  return user;
};

const listUsers = async () => {
  const users = await prisma.users.findMany({
    select: {
      id: true,
      nome: true,
      email: true,
    }
  });
  return users;
};

const createUser = async (nome: string, email: string, password: string) => {
  const incryptedPassword = await hash(password, 8);
  const user = await prisma.users.create({
    data: {
      id: uuidv4(),
      nome,
      email,
      password: incryptedPassword,
    }
  });
  return user;
};

const updateUser = async (id: string, nome?: string, email?: string, password?: string) => {
  const incryptedPassword = await hash(password, 8);
  const oldUser = await prisma.users.findUnique({
    where: { id },
  })
  const user = await prisma.users.update({
    where: { id },
    data: {
      nome: nome ? nome : oldUser.nome,
      email: email ? email : oldUser.email,
      password: password ? incryptedPassword : oldUser.password,
    }
  });
  return user;
};

const deleteUser = async (id: string) => {
  const user = await prisma.users.delete({
    where: { id },
  });
  return user;
};

module.exports = {
  createUser,
  listUsers,
  findUserByEmail,
  updateUser,
  deleteUser
};

export {};