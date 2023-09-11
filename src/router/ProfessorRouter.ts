import {Router} from "express"


import ProfessorController from "../controller/ProfessorController";


const professorRouter= Router();

professorRouter.post('/',ProfessorController.getInstance().saveProfessor);
professorRouter.get('/',ProfessorController.getInstance().listProfessor);
professorRouter.get('/:id_tabela_professor',ProfessorController.getInstance().findProfessor);
professorRouter.delete('/:id_tabela_professor',ProfessorController.getInstance().deleteProfessor);
professorRouter.put('/:id_tabela_professor',ProfessorController.getInstance().updateProfessor);

export default professorRouter 
