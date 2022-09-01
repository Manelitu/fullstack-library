import { Request, Response, NextFunction } from 'express';
const { verify } = require('jsonwebtoken');

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new Error('Token is missing');

  const token: string = authHeader.split(' ')[1];

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    const {id, nome, email} = decoded;
    req.id = id;
    req.nome = nome;
    req.email = email;
    next();

  } catch (err) {
    throw new Error('Invalid token`s signature');
  }
};

module.exports = verifyToken;