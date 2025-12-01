//./router/routers.ts
import express, { Router } from "express";
import type { Request, Response } from 'express';
export const router = Router();


router.get("/", (req: Request, res: Response) => {
  res.send(`Rota index`);
});

router.get("/app", (req: Request, res: Response) => {
  //enviar para o cliente SPA da aplicação REACT
  res.send(`Rota app`);
});

router.post("/signup", (req: Request, res: Response) => {
  //receber os dados no body do request 
  
  //validar os dados dentro das minhas regreas de negocio

  //retornar para resposta do request "success" ou "error" 
  res.send();
});

router.post("/login", (req: Request, res: Response) => {
  //receber os dados no body do request

  //validar os dados dentro das minhas regreas de negocio

  //retornar para resposta do request "success" ou "error"
  res.send();
});

router.post("/update", (req: Request, res: Response) => {
    //receber os dados no body do request

  //validar os dados dentro das minhas regreas de negocio

  //retornar para resposta do request "success" ou "error"
  res.send();
});

router.post("/recovery", (req: Request, res: Response) => {
    //receber os dados no body do request

  //validar os dados dentro das minhas regreas de negocio

  //retornar para resposta do request "success" ou "error"
  res.send();
})
