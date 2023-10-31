import { Router } from "express";
import SecretariaController from "../controller/SecretariaController";

export const professorDisciplinaRouter= Router();

professorDisciplinaRouter.post('/cria-secretaria',SecretariaController.getInstance().saveSecretaria);
professorDisciplinaRouter.get('/lista-secretaria',SecretariaController.getInstance().listSecretaria);
professorDisciplinaRouter.get('/encontra-secretaria/:id_secretaria',SecretariaController.getInstance().findSecretaria);
professorDisciplinaRouter.delete('/deleta-secretaria/:id_secretaria',SecretariaController.getInstance().deleteSecretaria);
professorDisciplinaRouter.put('/edita-secretaria/:id_secretaria',SecretariaController.getInstance().updateSecretaria);