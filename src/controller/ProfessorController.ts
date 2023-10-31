import ProfessorService from "../service/ProfessorService";


import { Request, Response } from 'express';


export default class ProfessorController {
    private static instance: ProfessorController;

    private constructor(){

    }

    public static getInstance(){
        if(!ProfessorController.instance){
          ProfessorController.instance = new ProfessorController();
        }
        return ProfessorController.instance;
    }

    public async saveProfessor(req: Request, res: Response) {
        const professorService = ProfessorService.getInstance();
        const professor = req.body;
        const professorCriado = await professorService.saveProfessor(professor);
        res.json(professorCriado)
    }

    public async listProfessor(req: Request,res: Response){
        const professorService = ProfessorService.getInstance();
        res.json(await professorService.listProfessor());
    }

    public async findProfessor(req: Request,res:Response){
        const professorService = ProfessorService.getInstance();
        const id_professor = req.params.id_professor;
        res.json(await professorService.findProfessor(id_professor));
    }

    public async deleteProfessor(req: Request,res:Response){
        const professorService = ProfessorService.getInstance();
        const id_professor = req.params.id_professor;
        await professorService.deleteProfessor((id_professor));
        res.json('Professor deletado');
    }

    public async updateProfessor(req:Request,res:Response){
        const professorService = ProfessorService.getInstance();
        const id_professor = req.params.id_professor;
        const professor = req.body;
        await professorService.updateProfessor((id_professor), professor);
        res.json('Update feito');
    }
}