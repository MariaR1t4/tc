import { Router } from "express";
import UserLoginController from "../controller/user.controller";
import { upload } from "../models/config/multer-config";


const authRouter = Router();

authRouter.post('/login', new UserLoginController().loginUser)
authRouter.post('/sign-up', new UserLoginController().signUpUser)
authRouter.post('/batch-sign-up', upload.single('csvFile'), new UserLoginController().signUpUsersInBatch)


export default authRouter;