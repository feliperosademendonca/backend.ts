import express from "express";
import type { Request, Response } from 'express';

const app = express();

let msg: string = 'mundo!';
console.log(`Olá, ${msg}`);

app.get("/", (req: Request, res: Response) => {
  res.send(`Rota index`);
});

app.listen(3000, () => {
  console.log('Servidor TypeScript Rodando');
});
