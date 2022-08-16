import { Request, Response, Application, Router } from 'express';

const app: Application = require('express')();

app.get("/", (req: Request, res: Response) => {
  res.send('Funcionou');
});

app.get("/teste", (req: Request, res: Response) => {
  res.send('Funcinou no /teste');
});

module.exports = app;