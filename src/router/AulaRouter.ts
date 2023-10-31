import { Router } from "express";
import AulaController from "../controller/AulaController";

//AULA ROUTER


export const aulaRouter= Router();
aulaRouter.post('/cria-aula',AulaController.getInstance().saveAula);
aulaRouter.get('/lista-aula',AulaController.getInstance().listAula);
//aulaRouter.get('/encontra-aula/:id_aula',AulaController.getInstance().findAula);
/*
aulaRouter.delete('/deleta-aula/:id_aula',AulaController.getInstance().deleteAula);
aulaRouter.put('/edita-aula/:id_aula',AulaController.getInstance().updateAula);*/

export default aulaRouter 