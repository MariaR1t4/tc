import { Request, Response } from "express";


import ProfessorServiceLogin from "../../service/login/ProfessorServiceLogin";

class ProfessorLoginController {
    async loginProfessor(req: Request, res: Response){
        const {email, senha} = req.body;
        console.log({"resopose":req.body})
        try{
        const token = await new ProfessorServiceLogin().loginProf(email, senha);
        res.json({token});
        console.log(token);
    }
        catch(err){
            res.status(401).send('Login failed');
        }
    }

    async signUpProf(req: Request, res: Response){
        const {email, senha, name, telefone} = req.body;
        await new ProfessorServiceLogin().signUpProf(email, senha, name, telefone);
        res.json('Cadastro criado com sucesso!');
    }

    async signUpProfessorInBatch(req:Request, res:Response) {
        console.log(req.file);
        await new ProfessorServiceLogin().signUpProfessorInBatch(req);
        res.json('OK!');
    }

}

export default ProfessorLoginController;