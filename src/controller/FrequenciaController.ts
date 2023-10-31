
/*import { Request, Response } from "express";

import FrequenciaService from "../service/FrequenciaService";


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
    const { token_aluno, rm } = req.body;
    if(token_aluno || rm){
      const frequenciaCriada = await frequenciaService.saveFrequencia(token_aluno, rm)
      res.json(frequenciaCriada);
    }else
      res.json("gerar novo token");
  }

  public async listFrequencia(req: Request, res: Response) {
    const frequenciaService = FrequenciaService.getInstance();
    res.json(await frequenciaService.listFrequencia());
  }

  public async findFrequencia(req: Request, res: Response) {
    const frequenciaService = FrequenciaService.getInstance();
    const id_frequencia = req.params.id_frequencia;
    res.json(await frequenciaService.findFrequencia(id_frequencia));
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
*/