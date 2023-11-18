import { query } from "express";
import Frequencia from "../models/entities/Frequencia";
import AulaRepository from "../models/entities/repositories/AulaRepository";
import FrequenciaRepository from "../models/entities/repositories/FrequenciaRepository";
import AulaService from "./AulaService";

export default class FrequenciaService {
  private constructor() {}
  Frequencia(frequencia: Frequencia[]) {
    throw new Error("Professor não foi criado");
  }
  private static instance: FrequenciaService;
  public static getInstance() {
    if (!FrequenciaService.instance) {
      FrequenciaService.instance = new FrequenciaService();
    }
    return FrequenciaService.instance;
  }
  public async saveFrequencia(token_aluno: string, numero: number) {
    try {
      let data = new Date();
      let presenca: number = 0;
      var data_frequencia = `${data}`;
      const buscar_aula = await AulaRepository.findOneBy({
        id_aula: token_aluno,
      });
      const NewFrequencia = new Frequencia();

      if (buscar_aula == null || numero == null) {
        return "nao encontrado";
      } else 
      NewFrequencia.id_aula = buscar_aula.id_aula;
      NewFrequencia.rm = numero;
      NewFrequencia.data_frequencia = data_frequencia;
      NewFrequencia.qtd_frequencia = true;
      const saveFreq = await FrequenciaRepository.save(NewFrequencia);
      return saveFreq;
    } catch (err) {
      console.log(err);
      console.log("erro");
      Promise.reject(err);
    }
  }
  public async listFrequencia(): Promise<Frequencia[]> {
    return await FrequenciaRepository.find();
  }
  public async findFrequenciaByRm(rm: number) {
    if (rm) {
      const res = await FrequenciaRepository.find();
      
     const mapRes = res.map((res) => ({
        data: res.data_frequencia,
        rm: res.rm
      }));
      
      console.log(mapRes.length);
      return mapRes;
    } else {
      console.log("erro");
    }
  }
  public async somaFrequencia(mapRes:any, rm:number){
    mapRes.length()
  }
  

  public async findFrequencia(
    id_frequencia: string
  ): Promise<Frequencia | null> {
    return await FrequenciaRepository.findOneBy({ id_frequencia });
  }
  public async deleteFrequencia(id_frequencia: string): Promise<void> {
    await FrequenciaRepository.delete(id_frequencia);
  }
  public async updateFrequencia(id_frequencia: string,frequencia: Frequencia): Promise<void> {
    const frequenciaAlterada = await FrequenciaRepository.findOneBy({
      id_frequencia,
    });
    if (frequenciaAlterada) {
      await FrequenciaRepository.save(frequenciaAlterada);
    } else {
      console.log("usuario nao encontrado");
    }
    Promise.resolve();
  }
}
