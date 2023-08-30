import { Request, Response } from "express";
import PessoaService from "../service/PessoasService";

export default class PessoaController {
    private static instance: PessoaController;

    private constructor(){

    }

    public static getInstance(){
        if(!PessoaController.instance){
            PessoaController.instance = new PessoaController();
        }
        return PessoaController.instance;
    }

    public async savePessoa(req: Request, res: Response) {
        const pessoasService = PessoaService.getInstance();
        const pessoas = req.body;
        const Pessoascriadas = await pessoasService.savePessoas(pessoas);
        console.log(Pessoascriadas)
        res.json(Pessoascriadas)
    }

    public async getPessoa(req: Request,res: Response){
        const pessoasService = PessoaService.getInstance();
        res.json(await pessoasService.getPessoas());
    }

    public async getPessoaById(req: Request,res:Response){
        const pessoasService = PessoaService.getInstance();
        const id = req.params.id;
        res.json(await pessoasService.getPessoasById(parseInt(id)));
    }
    // dois arg para Pessoas mas só passa um, id
    public async deletePessoaById(req: Request,res:Response){
        const pessoasService = PessoaService.getInstance();
        const id = req.params.id;
        await pessoasService.deletePessoasById(parseInt(id));
        res.json('ok');
    }

    public async updatePessoaById(req:Request,res:Response){
        const pessoasService = PessoaService.getInstance();
        const id = req.params.id;
        const pessoas = req.body;
        await pessoasService.updatePessoasById(parseInt(id),pessoas);
        res.json('ok');
    }
}

