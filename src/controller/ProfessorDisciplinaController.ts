import { Request, Response } from 'express';


import ProfessorDisciplinaService from '../service/ProfessorDisciplinaService';


export default class ProfessorDisciplinaController {
    private static instance: ProfessorDisciplinaController;

    private constructor(){

    }

    public static getInstance(){
        if(!ProfessorDisciplinaController.instance){
          ProfessorDisciplinaController.instance = new ProfessorDisciplinaController();
        }
        return ProfessorDisciplinaController.instance;
    }
    public async saveProfessorDisciplina(req: Request, res: Response) {
        const professor_disciplina = ProfessorDisciplinaService.getInstance();
        const professorDisciplina = req.body;
        const professorDisciplinaCriada = await professor_disciplina.saveProfessorDisciplina(professorDisciplina);
        res.json(professorDisciplinaCriada)
    }
    public async listProfessorDisciplina(req: Request,res: Response){
        const professorDisciplinaService = ProfessorDisciplinaService.getInstance();
        res.json(await professorDisciplinaService.listProfessorDisciplina());
    }

    public async findProfessorDisciplina(req: Request,res:Response){
        const professorDisciplinaService = ProfessorDisciplinaService.getInstance();
        const id_professor_disciplina = req.params.id_professor_disciplina;
        res.json(await professorDisciplinaService.findProfessorDisciplina((id_professor_disciplina)));
    }

    public async deleteProfessorDisciplina(req: Request,res:Response){
        const professorDisciplinaService = ProfessorDisciplinaService.getInstance();
        const id_professor_disciplina = req.params.id_professor_disciplina;
        await professorDisciplinaService.deleteProfessorDisciplina((id_professor_disciplina));
        res.json('Aluno deletado');
    }

    public async updateProfessorDisciplina(req:Request,res:Response){
        const professorDisciplinaService = ProfessorDisciplinaService.getInstance();
        const id_professor_disciplina = req.params.id_professor_disciplina;
        const professorDisciplina = req.body;
        await professorDisciplinaService.updateProfessorDisciplina((id_professor_disciplina), professorDisciplina);
        res.json('Atualização feita com sucesso!');
    }
    }

