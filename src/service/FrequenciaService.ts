import FrequenciaRepositorie from "../models/entities/repositories/FrequenciaRepositorie";
import Frequencia from "../models/entities/Frequencia";


export default class FrequenciaService{
    private constructor(){

    }
    criaPessoas(Frequencia: Frequencia[]) {
        throw new Error('Frequencia was not implemented');
    }
    private static instance: FrequenciaService;
    //create a new instance
    public static getInstance(){
        if(!FrequenciaService.instance){
            FrequenciaService.instance = new FrequenciaService();
        };
        return FrequenciaService.instance;
    }
    //save a instance
    public async saveFrequencia(obj: Frequencia):Promise<Frequencia>{
        return await FrequenciaRepositorie.save(obj);
    }
    public async getFrequencias():Promise<Frequencia[]>{
        return await FrequenciaRepositorie.find();
    }
    public async getFrequenciaById(id_freq:number) : Promise<Frequencia | null> {
        return await FrequenciaRepositorie.findOneBy({id_freq}); 
    }
    public async deleteFrequenciaById(id:number):Promise<void>{
        await FrequenciaRepositorie.delete(id);
    }
    public async updateFrequenciaById(id_freq: number, frequencia:Frequencia):Promise<void>{
        const FrequenciaNow = await FrequenciaRepositorie.findOneBy({id_freq});
        if(FrequenciaNow){
            FrequenciaNow.id_freq = frequencia.id_freq;
            FrequenciaNow.lista_chamada = frequencia.lista_chamada;
            FrequenciaNow.id_turma = frequencia.id_turma;
            FrequenciaNow.rm = frequencia.rm;
            FrequenciaNow.frequencia = frequencia.frequencia;
            await FrequenciaRepositorie.save(FrequenciaNow);
        }
        Promise.resolve();
    }
    
}