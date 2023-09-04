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

    public async listFrequencia(req: Request,res: Response){
        const frequenciaService = FrequenciaService.getInstance();
        res.json(await frequenciaService.listFrequencia());
    }

    public async findFrequencia(req: Request,res:Response){
        const frequenciaService = FrequenciaService.getInstance();
        const id = req.params.id;
        res.json(await frequenciaService.findFrequencia(parseInt(id)));
    }

    public async deleteFrequencia(req: Request,res:Response){
        const frequenciaService = FrequenciaService.getInstance();
        const id_frequencia = req.params.id_frequencia;
        await frequenciaService.deleteFrequencia(parseInt(id_frequencia));
        res.json('Frequencia deletada');
    }

    public async updateFrequencia(req:Request,res:Response){
        const frequenciaService = FrequenciaService.getInstance();
        const id_frequencia = req.params.id_frequencia;
        const frequencia = req.body;
        await frequenciaService.updateFrequencia(parseInt(id_frequencia),frequencia);
        res.json('Lista de frequencia alterada');
    }
}