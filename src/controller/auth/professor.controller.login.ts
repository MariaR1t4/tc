import { Request, Response } from "express";


import ProfessorServiceLogin from "../../service/login/ProfessorServiceLogin";

class ProfessorLoginController {
    async loginProfessor(req: Request, res: Response){
        const {email, password} = req.body;
        try{
        const token = await new ProfessorServiceLogin().loginProf(email, password);
        res.json({token});}
        catch(err){
            res.status(401).send("Login failed");
        }
    }

    async signUpProf(req: Request, res: Response){
        const {email, password} = req.body;
        await new ProfessorServiceLogin().signUpProf(email, password);
        res.json('Cadastro criado com sucesso!');
    }

    /*async signUpAlunosInBatch(req:Request, res:Response) {
        console.log(req.file);
        await new ProfessorServiceLogin().signUpAlunosInBatch(req);
        res.json('OK!');
    }

    async updateAlunoImage(req:Request, res:Response) {
        console.log(req.file);
        await new ProfessorServiceLogin().updateAlunoImage(req);
        res.json('OK!');
    }*/

}

export default ProfessorLoginController;