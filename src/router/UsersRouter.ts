import {Router} from "express"
import UserController from "../controller/UserController";


const UserRouter= Router();

UserRouter.post('/',UserController.getInstance().saveUser);
UserRouter.get('/',UserController.getInstance().getUsers);
UserRouter.get('/:id',UserController.getInstance().getUserById);
UserRouter.delete('/:id',UserController.getInstance().deleteUserById);
UserRouter.put('/:id',UserController.getInstance().updateUserById);

export default UserRouter 
