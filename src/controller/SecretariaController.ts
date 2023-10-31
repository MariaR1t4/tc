import { Request, Response } from "express";
import SecretariaService from "../service/SecretariaService";


export default class SecretariaController {
    private static instance: SecretariaController;

    private constructor(){

    }

    public static getInstance(){
        if(!SecretariaController.instance){
            SecretariaController.instance = new SecretariaController();
        }
        return SecretariaController.instance;
    }

    public async saveSecretaria(req: Request, res: Response) {
        const secretariaService = SecretariaService.getInstance();
        const secretaria = req.body;
        const secretariaCriada = await secretariaService.saveSecretaria(secretaria);
        console.log(secretariaCriada)
        res.json(secretariaCriada)
    }

    public async listSecretaria(req: Request,res: Response){
        const secretariaService = SecretariaService.getInstance();
        res.json(await secretariaService.listSecretaria());
    }

    public async findSecretaria(req: Request,res:Response){
        const secretariaService = SecretariaService.getInstance();
        const id_secretaria = req.params.id_secretaria;
        res.json(await secretariaService.findSecretaria(id_secretaria));
    }

    public async deleteSecretaria(req: Request,res:Response){
        const secretariaService = SecretariaService.getInstance();
        const id_secretaria = req.params.id_secretaria;
        await secretariaService.deleteSecretaria(id_secretaria);
        res.json('Funcionario deletada');
    }

    public async updateSecretaria(req:Request,res:Response){
        const secretariaService = SecretariaService.getInstance();
        const id_secretaria = req.params.id_secretaria;
        const secretaria = req.body;
        await secretariaService.updateSecretaria(id_secretaria,secretaria);
        res.json('Secretaria alterada');
    }
}