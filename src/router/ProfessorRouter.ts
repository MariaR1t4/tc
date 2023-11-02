import {Router} from "express"
import { upload } from "../configs/multer-config";


import ProfessorController from "../controller/ProfessorController";


const professorRouter= Router();

professorRouter.post('/cria-professor',ProfessorController.getInstance().saveProfessor);
professorRouter.post('/cria-professor/batch', upload.single('csvFile'), ProfessorController.getInstance().singUpBatchProfessor)
professorRouter.get('/lista-professor',ProfessorController.getInstance().listProfessor);
professorRouter.get('/encontra-professor/:id_tabela_professor',ProfessorController.getInstance().findProfessor);
professorRouter.delete('/deleta-professor/:id_tabela_professor',ProfessorController.getInstance().deleteProfessor);
professorRouter.put('/edita-professor/:id_tabela_professor',ProfessorController.getInstance().updateProfessor);

export default professorRouter 
