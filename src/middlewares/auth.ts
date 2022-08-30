import { Request, Response, NextFunction } from 'express';
const { verify } = require('jsonwebtoken');

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new Error('Token is missing');

  const token = authHeader.split(' ')[1];
  
  next();

};

module.exports = verifyToken;