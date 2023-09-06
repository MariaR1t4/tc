import { Router } from "express";
import UserController from "../controller/UserController";
import UserLoginController from "../controller/user.controller";
import { upload } from "../models/config/multer-config";


const userRouter= Router();

userRouter.post('/',UserController.getInstance().saveuser);
userRouter.get('/',UserController.getInstance().listUser);
userRouter.get('/:rm',UserController.getInstance().getUserById);
userRouter.delete('/:rm',UserController.getInstance().deleteUserById);
userRouter.put('/:rm',UserController.getInstance().updateUserById);
userRouter.put('/update-image/:id', upload.single('image'), new UserLoginController().updateUserImage)
export default userRouter 
