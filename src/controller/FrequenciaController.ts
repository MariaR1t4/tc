import { Request, Response } from "express";
import FrequenciaService from "../service/FrequenciaService";

export default class FrequenciaController {
    private static instance: FrequenciaController;

    private constructor(){

    }

    public static getInstance(){
        if(!FrequenciaController.instance){
            FrequenciaController.instance = new FrequenciaController();
        }
        return FrequenciaController.instance;
    }

    public async saveFrequencia(req: Request, res: Response) {
        const frequenciaService = FrequenciaService.getInstance();
        const frequencia = req.body;
        const Frequenciascriadas = await frequenciaService.saveFrequencia(frequencia);
        console.log(Frequenciascriadas)
        res.json(Frequenciascriadas)
    }

    public async getFrequencia(req: Request,res: Response){
        const frequenciaService = FrequenciaService.getInstance();
        res.json(await frequenciaService.getFrequencias());
    }

    public async getFrequenciaById(req: Request,res:Response){
        const frequenciaService = FrequenciaService.getInstance();
        const id = req.params.id;
        res.json(await frequenciaService.getFrequenciaById(parseInt(id)));
    }

    public async deleteFrequenciaById(req: Request,res:Response){
        const frequenciaService = FrequenciaService.getInstance();
        const id = req.params.id;
        await frequenciaService.deleteFrequenciaById(parseInt(id));
        res.json('ok');
    }

    public async updateFrequenciaById(req:Request,res:Response){
        const frequenciaService = FrequenciaService.getInstance();
        const id = req.params.id;
        const frequencia = req.body;
        await frequenciaService.updateFrequenciaById(parseInt(id),frequencia);
        res.json('ok');
    }
}