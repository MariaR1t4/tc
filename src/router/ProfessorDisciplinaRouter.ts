import { Router } from "express";


import ProfessorDisciplinaController from "../controller/ProfessorDisciplinaController";

const professorDisciplinaRouter= Router();

professorDisciplinaRouter.post('/cria-prof-disciplina',ProfessorDisciplinaController.getInstance().saveProfessorDisciplina);
professorDisciplinaRouter.get('/lista-prof-disciplina',ProfessorDisciplinaController.getInstance().listProfessorDisciplina);
professorDisciplinaRouter.get('/encontra-prof-disciplina/:id_professor_disciplina',ProfessorDisciplinaController.getInstance().findProfessorDisciplina);
professorDisciplinaRouter.delete('/deleta-prof-disciplina/:id_professor_disciplina',ProfessorDisciplinaController.getInstance().deleteProfessorDisciplina);
professorDisciplinaRouter.put('/edita-prof-disciplina/:id_professor_disciplina',ProfessorDisciplinaController.getInstance().updateProfessorDisciplina);

export default professorDisciplinaRouter 
