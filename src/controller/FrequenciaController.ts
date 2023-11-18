import { Request, Response } from "express";

import FrequenciaService from "../service/FrequenciaService";
import { rm } from "fs";
export default class FrequenciaController {
  private static instance: FrequenciaController;

  private constructor() {}

  public static getInstance() {
    if (!FrequenciaController.instance) {
      FrequenciaController.instance = new FrequenciaController();
    }
    return FrequenciaController.instance;
  }

  public async saveFrequencia(req: Request, res: Response) {
    const frequenciaService = FrequenciaService.getInstance()
    const { token_aluno, rm} = req.body;
    const presenca = req.params.presenca;
    if(!rm){
      res.status(400).send("rm nao encontrado")
    }
    if(token_aluno && rm){
      const frequenciaCriada = await frequenciaService.saveFrequencia(token_aluno, rm)
      if(frequenciaCriada){
        console.log(presenca)
      }
      res.json(frequenciaCriada);
    }else
      res.status(400).json("tente novamente");
  }

  public async listFrequencia(req: Request, res: Response) {
    const frequenciaService = FrequenciaService.getInstance();
    res.json(await frequenciaService.listFrequencia());
  }

  public async findFrequenciaByRm(req: Request, res: Response) {
    try{
      const frequenciaService = FrequenciaService.getInstance();
      const rm = req.body;
      if(!rm){
          res.status(400).send({err:"rm vazio/inexistente"})
      }
       res.json(await frequenciaService.findFrequenciaByRm(rm));
  }catch(err){
      console.log(err)
      return res.status(400).send({err:"nao foi possivel encontrar aula"})
  }
  }

  public async deleteFrequencia(req: Request, res: Response) {
    const frequenciaService = FrequenciaService.getInstance();
    const id_frequencia = req.params.id_frequencia;
    await frequenciaService.deleteFrequencia(id_frequencia);
    res.json("Frequencia deletada");
  }

  public async updateFrequencia(req: Request, res: Response) {
    const frequenciaService = FrequenciaService.getInstance();
    const id_frequencia = req.params.id_frequencia;
    const frequencia = req.body;
    await frequenciaService.updateFrequencia(id_frequencia, frequencia);
    res.json("Lista de frequencia alterada");
  }
/*  public async frequencia(req: Request, res: Response) {
    const { token } = req.body;
    if (!token) {
      res.json("token invalido");
    }
    const id_aula = req.params.id_aula;
    const frequenciaService = FrequenciaService.getInstance();
    await frequenciaService.frequencia(id_aula, token);
  }
}
*/}