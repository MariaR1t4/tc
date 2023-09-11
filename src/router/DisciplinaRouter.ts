import { Router } from "express";


import DisciplinaController from "../controller/DisciplinaController";

const disciplinaRouter= Router();

disciplinaRouter.post('/',DisciplinaController.getInstance().saveDisciplina);
disciplinaRouter.get('/',DisciplinaController.getInstance().listDisciplina);
disciplinaRouter.get('/:id_disciplina',DisciplinaController.getInstance().findDisciplina);
disciplinaRouter.delete('/:id_disciplina',DisciplinaController.getInstance().deleteDisciplina);
disciplinaRouter.put('/:id_disciplina',DisciplinaController.getInstance().updateDisciplina);

export default disciplinaRouter 
