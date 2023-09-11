import { Request, Response } from "express";


import UserService from "../service/UserService"; 


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

    public async saveuser(req: Request, res: Response) {
        const userService = UserService.getInstance();
        const user = req.body;
        const usercreated = await userService.saveUser(user);
        res.json(usercreated)
    }

    public async listUser(req: Request,res: Response){
        const userService = UserService.getInstance();
        res.json(await userService.listUser());
    }

    public async getUserById(req: Request,res:Response){
        const userService = UserService.getInstance();
        const randomNumber = req.params.randomNumber;
        res.json(await userService.getUserById(parseInt(randomNumber)));
    }

    public async deleteUserById(req: Request,res:Response){
        const userService = UserService.getInstance();
        const randomNumber = req.params.randomNumber;
        await userService.deleteUserById(parseInt(randomNumber));
        res.json('user deletada');
    }

    public async updateUserById(req:Request,res:Response){
        const userService = UserService.getInstance();
        const randomNumber = req.params.randomNumber;
        const user = req.body;
        await userService.updateUserById(parseInt(randomNumber), user);
        res.json('ok');
    }
}

export default UserController
 
