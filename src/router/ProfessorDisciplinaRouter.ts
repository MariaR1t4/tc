import { Router } from "express";


import ProfessorDisciplinaController from "../controller/ProfessorDisciplinaController";

const professorDisciplinaRouter= Router();

professorDisciplinaRouter.post('/',ProfessorDisciplinaController.getInstance().saveProfessorDisciplina);
professorDisciplinaRouter.get('/',ProfessorDisciplinaController.getInstance().listProfessorDisciplina);
professorDisciplinaRouter.get('/:id_professor_disciplina',ProfessorDisciplinaController.getInstance().findProfessorDisciplina);
professorDisciplinaRouter.delete('/:id_professor_disciplina',ProfessorDisciplinaController.getInstance().deleteProfessorDisciplina);
professorDisciplinaRouter.put('/:id_professor_disciplina',ProfessorDisciplinaController.getInstance().updateProfessorDisciplina);

export default professorDisciplinaRouter 
