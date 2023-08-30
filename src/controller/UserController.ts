import { Request, Response } from "express";
import UserService from "../service/userService";


class UserController {
    private static instance: UserController;

    private constructor(){

    }

    public static getInstance(){
        if(!UserController.instance){
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }

    public async saveUser(req: Request, res: Response) {
        const userService = UserService.getInstance();
        const user = req.body;
        const usercreated = await userService.saveUser(user);
        console.log(usercreated)
        res.json(usercreated)
    }

    public async getUsers(req: Request,res: Response){
        const userService = UserService.getInstance();
        res.json(await userService.getUsers());
    }

    public async getUserById(req: Request,res:Response){
        const userService = UserService.getInstance();
        const {id} = req.params;
        res.json(await userService.getUserById(parseInt(id)));
    }

    public async deleteUserById(req: Request,res:Response){
        const userService = UserService.getInstance();
        const id = req.params.id;
        await userService.deleteUserById(parseInt(id));
        res.json('ok');
    }

    public async updateUserById(req:Request,res:Response){
        const userService = UserService.getInstance();
        const id = req.params.id;
        const user = req.body;
        await userService.updateUserById(parseInt(id), user);
        res.json('ok');
    }
}

export default UserController
 
