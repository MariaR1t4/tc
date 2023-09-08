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
        const id_tabela_professor = req.params.id_tabela_professor;
        res.json(await professorService.findProfessor(parseInt(id_tabela_professor)));
    }

    public async deleteProfessor(req: Request,res:Response){
        const professorService = ProfessorService.getInstance();
        const id_tabela_professor = req.params.id_tabela_professor;
        await professorService.deleteProfessor(parseInt(id_tabela_professor));
        res.json('Professor deletado');
    }

    public async updateProfessor(req:Request,res:Response){
        const professorService = ProfessorService.getInstance();
        const id_tabela_professor = req.params.id_tabela_professor;
        const professor = req.body;
        await professorService.updateProfessor(parseInt(id_tabela_professor), professor);
        res.json('Update feito');
    }
}