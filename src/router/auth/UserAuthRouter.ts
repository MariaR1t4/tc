import { Router } from "express";
import { upload } from "../../configs/multer-config";


import ProfessorLoginController from "../../controller/auth/professor.controller.login";
import AlunoLoginController from "../../controller/auth/aluno.controller.login";

const authRouter = Router();

authRouter.post('/login/aluno', new AlunoLoginController().loginAluno)
authRouter.post('/login/professor', new ProfessorLoginController().loginProfessor)
authRouter.post('/alunos/batch-sign-up', upload.single('csvFile'), new AlunoLoginController().signUpAlunosInBatch)
authRouter.post('/professor/batch-sign-up', upload.single('csvFile'), new ProfessorLoginController().signUpProfessorInBatch)
authRouter.post('/sign-up/aluno', new AlunoLoginController().signUpAluno)
authRouter.post('/sign-up/professor', new ProfessorLoginController().signUpProf)

export default authRouter;