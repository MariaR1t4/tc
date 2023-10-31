import { Request, Response } from "express";


import DisciplinaService from "../service/DisciplinaService";

export default class DisciplinaController {
    private static instance: DisciplinaController;

    private constructor(){

    }

    public static getInstance(){
        if(!DisciplinaController.instance){
            DisciplinaController.instance = new DisciplinaController();
        }
        return DisciplinaController.instance;
    }

    public async saveDisciplina(req: Request, res: Response) {
        const disciplinaService = DisciplinaService.getInstance();
        const disciplina = req.body;
        const disciplinaCriada = await disciplinaService.saveDisciplina(disciplina);
        res.json(disciplinaCriada)
    }

    public async listDisciplina(req: Request,res: Response){
        const disciplinaService = DisciplinaService.getInstance();
        res.json(await disciplinaService.listDisciplina());
    }

    public async findDisciplina(req: Request,res:Response){
        const disciplinaService = DisciplinaService.getInstance();
        const id_disciplina = req.params.id_disciplina;
        res.json(await disciplinaService.findDisciplina(id_disciplina));
    }

    public async deleteDisciplina(req: Request,res:Response){
        const disciplinaService = DisciplinaService.getInstance();
        const id_disciplina = req.params.id_disciplina;
        await disciplinaService.deleteDisciplina((id_disciplina));
        res.json('Disciplina deletada');
    }

    public async updateDisciplina(req:Request,res:Response){
        const disciplinaService = DisciplinaService.getInstance();
        const id_disciplina = req.params.id_disciplina;
        const disciplina = req.body;
        await disciplinaService.updateDisciplina((id_disciplina), disciplina);
        res.json('Atualização feita com sucesso!');
    }
}