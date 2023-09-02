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

    public async getTurmas(req: Request,res: Response){
        const turmaService = TurmaService.getInstance();
        res.json(await turmaService.getTurmas());
    }

    public async getTurmaById(req: Request,res:Response){
        const turmaService = TurmaService.getInstance();
        const {id_turma} = req.params;
        res.json(await turmaService.getTurmaById(parseInt(id_turma)));
    }

    public async deleteTurmaById(req: Request,res:Response){
        const turmaService = TurmaService.getInstance();
        const id_turma = req.params.id_turma;
        await turmaService.deleteTurmaById(parseInt(id_turma));
        res.json('ok');
    }

    public async updateTurmaById(req:Request,res:Response){
        const turmaService = TurmaService.getInstance();
        const id_turma = req.params.id_turma;
        const Turma = req.body;
        await turmaService.updateTurmaById(parseInt(id_turma), Turma);
        res.json('ok');
    }
}

export default TurmaController
 
