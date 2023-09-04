import { Request, Response } from "express";
import AlunoService from "../service/AlunoService";

export default class AlunoController {
    private static instance: AlunoController;

    private constructor(){

    }

    public static getInstance(){
        if(!AlunoController.instance){
            AlunoController.instance = new AlunoController();
        }
        return AlunoController.instance;
    }

    public async saveAluno(req: Request, res: Response) {
        const alunoService = AlunoService.getInstance();
        const aluno = req.body;
        const alunoCriado = await alunoService.saveAluno(aluno);
        res.json(alunoCriado)
    }

    public async listAluno(req: Request,res: Response){
        const alunoService = AlunoService.getInstance();
        res.json(await alunoService.listAluno());
    }

    public async findAlunoById(req: Request,res:Response){
        const alunoService = AlunoService.getInstance();
        const rm = req.params.rm;
        res.json(await alunoService.findAlunoById(parseInt(rm)));
    }

    public async deleteAluno(req: Request,res:Response){
        const alunoService = AlunoService.getInstance();
        const rm = req.params.rm;
        await alunoService.deleteAluno(parseInt(rm));
        res.json('Aluno deletado');
    }

    public async updateAluno(req:Request,res:Response){
        const alunoService = AlunoService.getInstance();
        const rm = req.params.rm;
        const aluno = req.body;
        await alunoService.updateAluno(parseInt(rm), aluno);
        res.json('Atualização feita com sucesso!');
    }
}