import { Request, Response } from "express";


import AlunoServiceLogin from "../service/login/AlunoServiceLogin";

class AlunoLoginController {
        async loginAluno(req: Request, res: Response){
            const {email, senha} = req.body;
            try{
            const token = await new AlunoServiceLogin().loginAluno(email, senha);
            res.json({token});}
            catch(err){
                res.status(401).send("Login failed");
            }
        }

        async signUpAluno(req: Request, res: Response){
            const {email, senha} = req.body;
            await new AlunoServiceLogin().signUpAluno(email, senha);
            res.json('Cadastro criado com sucesso!');
        }

        async signUpAlunosInBatch(req:Request, res:Response) {
            console.log(req.file);
            await new AlunoServiceLogin().signUpAlunosInBatch(req);
            res.json('OK!');
        }

        async updateAlunoImage(req:Request, res:Response) {
            console.log(req.file);
            await new AlunoServiceLogin().updateAlunoImage(req);
            res.json('OK!');
        }

}

export default AlunoLoginController;