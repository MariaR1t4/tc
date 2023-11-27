import { query } from "express";
import Frequencia from "../models/entities/Frequencia";
import AulaRepository from "../models/entities/repositories/AulaRepository";
import FrequenciaRepository from "../models/entities/repositories/FrequenciaRepository";
import AulaService from "./AulaService";
import { date } from "zod";

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
      var date = new Date()
      var year = date.getFullYear().toString()
      var month = (date.getMonth() + 1).toString() 
      var day = date.getDate().toString()
      var data_frequencia = `${day}-${month}-${year}`
      const buscar_aula = await AulaRepository.findOneBy({
        id_aula: token_aluno,
      });
      const NewFrequencia = new Frequencia();

      if (buscar_aula == null || numero == null) {
        return "nao encontrado";
      } else 
      setTimeout(()=>
        (`${buscar_aula}` ), 5*60*1000
      )
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
    if (!rm) {
      console.log("erro");
    } else {
      const res = await FrequenciaRepository.find();
      
     const mapRes = res.map((res) => ({
        data: res.data_frequencia,
        rm: res.rm
      }));
      
      console.log(mapRes.length);
      return mapRes;
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
