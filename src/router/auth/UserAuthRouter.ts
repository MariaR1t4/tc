import { Router } from "express";
import { upload } from "../../configs/multer-config";


import UserLoginController from "../../controller/user.controller";

const authRouter = Router();

authRouter.post('/login', new UserLoginController().loginAluno)
authRouter.post('/sign-up', new UserLoginController().signUpAluno)
authRouter.post('/batch-sign-up', upload.single('csvFile'), new UserLoginController().signUpAlunosInBatch)


export default authRouter;