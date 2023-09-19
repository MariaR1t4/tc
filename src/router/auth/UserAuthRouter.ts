import { Router } from "express";
import { upload } from "../../configs/multer-config";


import ProfessorLoginController from "../../controller/auth/professor.controller.login";
import AlunoLoginController from "../../controller/auth/aluno.controller.login";

const authRouter = Router();

authRouter.post('/login/aluno', new AlunoLoginController().loginAluno)
authRouter.post('/login/professor', new ProfessorLoginController().loginProfessor)
/*authRouter.post('/sign-up', new UserLoginController().signUpAluno)
authRouter.post('/batch-sign-up', upload.single('csvFile'), new UserLoginController().signUpAlunosInBatch)*/


export default authRouter;