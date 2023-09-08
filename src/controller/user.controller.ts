import { Request, Response } from "express";
import UserServiceLogin from "../service/login/UserServiceLogin";

class UserLoginController {
        async loginUser(req: Request, res: Response){
            const {email, password} = req.body;
            try{
            const token = await new UserServiceLogin().loginUser(email, password);
            res.json({token});}
            catch(err){
                res.status(401).send("Login failed");
            }
        }

        async signUpUser(req: Request, res: Response){
            const {email, password} = req.body;
            await new UserServiceLogin().signUpUser(email, password);
            res.json('Bem criado!');
        }

        async signUpUsersInBatch(req:Request, res:Response) {
            console.log(req.file);
            await new UserServiceLogin().signUpUsersInBatch(req);
            res.json('files');
        }

        async updateUserImage(req:Request, res:Response) {
            console.log(req.file);
            await new UserServiceLogin().updateUserImage(req);
            res.json('files');
        }

}

export default UserLoginController;