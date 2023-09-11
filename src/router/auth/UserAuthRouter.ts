import { Router } from "express";
import { upload } from "../../configs/multer-config";


import UserLoginController from "../../controller/user.controller";

const authRouter = Router();

authRouter.post('/login', new UserLoginController().loginUser)
authRouter.post('/sign-up', new UserLoginController().signUpUser)
authRouter.post('/batch-sign-up', upload.single('csvFile'), new UserLoginController().signUpUsersInBatch)


export default authRouter;