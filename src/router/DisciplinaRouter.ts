import { Router } from "express";


import DisciplinaController from "../controller/DisciplinaController";

const disciplinaRouter= Router();

disciplinaRouter.post('/cria-disciplina',DisciplinaController.getInstance().saveDisciplina);
disciplinaRouter.get('/lista-disciplina',DisciplinaController.getInstance().listDisciplina);
disciplinaRouter.get('/encontra-disciplina/:id_disciplina',DisciplinaController.getInstance().findDisciplina);
disciplinaRouter.delete('/deleta-disciplina/:id_disciplina',DisciplinaController.getInstance().deleteDisciplina);
disciplinaRouter.put('/edita-disciplina/:id_disciplina',DisciplinaController.getInstance().updateDisciplina);

export default disciplinaRouter 
