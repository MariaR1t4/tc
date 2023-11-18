import { Request, Response } from "express";
import { AppDataSource } from "../models/DataBase";


import Aula from "../models/entities/Aula";
import AulaService from "../service/AulaService";

export default class AulaController {
    private static instance: AulaController;

    private constructor(){

    }

    public static getInstance(){
        if(!AulaController.instance){
          AulaController.instance = new AulaController();
        }
        return AulaController.instance;
    }

    public async saveAula(req: Request, res: Response) {
        const aulaService = AulaService.getInstance();
        const aula = req.body;
        const aulaCriada = await aulaService.saveAula(aula);
        res.json(aulaCriada)
    }

    public async listAula(req: Request,res: Response){
        const aulaService = AulaService.getInstance();
        res.json(await aulaService.listAula());
    }

    public async findAulaById(req: Request,res:Response){
        try{
        const aulaService = AulaService.getInstance();
        const id_aula = req.params.id_aula;
        if(!id_aula){
            res.status(400).send({err:"aula nao encontrada"})
        }
         res.json(await aulaService.findAulaById(id_aula));
    }catch(err){
        console.log(err)
        return res.status(400).send({err:"nao foi possivel encontrar aula"})
    }
}
    public async deleteAula(req: Request,res:Response){
        const aulaService = AulaService.getInstance();
        const id_aula = req.params.id_aula;
        await aulaService.deleteAula(id_aula);
        res.json('aula deletada');
    }

    public async updateAula(req:Request,res:Response){
        const aulaService = AulaService.getInstance();
        const id_aula = req.params.id_aula;
        const aula = req.body;
        await aulaService.updateAula((id_aula), aula);
        res.json('Atualização feita com sucesso!');
    }
}