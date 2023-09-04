import { Request, Response } from "express";
import TurmaService from "../service/TurmaService";


class TurmaController {
    private static instance: TurmaController;

    private constructor(){

    }

    public static getInstance(){
        if(!TurmaController.instance){
            TurmaController.instance = new TurmaController();
        }
        return TurmaController.instance;
    }

    public async saveTurma(req: Request, res: Response) {
        const turmaService = TurmaService.getInstance();
        const Turma = req.body;
        const turmacreated = await turmaService.saveTurma(Turma);
        console.log(turmacreated)
        res.json(turmacreated)
    }

    public async listTurma(req: Request,res: Response){
        const turmaService = TurmaService.getInstance();
        res.json(await turmaService.listTurma());
    }

    public async findTurma(req: Request,res:Response){
        const turmaService = TurmaService.getInstance();
        const {id_turma} = req.params;
        res.json(await turmaService.findTurma(parseInt(id_turma)));
    }

    public async deleteTurma(req: Request,res:Response){
        const turmaService = TurmaService.getInstance();
        const id_turma = req.params.id_turma;
        await turmaService.deleteTurma(parseInt(id_turma));
        res.json('Turma deletada');
    }

    public async updateTurma(req:Request,res:Response){
        const turmaService = TurmaService.getInstance();
        const id_turma = req.params.id_turma;
        const Turma = req.body;
        await turmaService.updateTurma(parseInt(id_turma), Turma);
        res.json('ok');
    }
}

export default TurmaController
 
