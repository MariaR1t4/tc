import { Router } from "express";
import { upload } from "../configs/multer-config";


import UserLoginController from "../controller/user.controller";

const userRouter = Router();

userRouter.put('/update-image', upload.single('image'), new UserLoginController().updateUserImage)

export default userRouter