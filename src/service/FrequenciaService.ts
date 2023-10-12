import Frequencia from "../models/entities/Frequencia";
import FrequenciaRepository from "../models/entities/repositories/FrequenciaRepository";


export default class FrequenciaService{
    private constructor(){

    }
    Frequencia(frequencia: Frequencia[]) {
        throw new Error('Professor não foi criado');
    }
    private static instance: FrequenciaService;
    public static getInstance(){
        if(!FrequenciaService.instance){
          FrequenciaService.instance = new FrequenciaService();
        };
        return FrequenciaService.instance;
    }
    public async saveFrequencia(obj: Frequencia):Promise<Frequencia>{
        return await FrequenciaRepository.save(obj);
    }
    public async listFrequencia():Promise<Frequencia[]>{
        return await FrequenciaRepository.find();
    }
    public async findFrequencia(id_aula:number) : Promise<Frequencia | null> {
        return await FrequenciaRepository.findOneBy({id_aula}); 
    }
    public async deleteFrequencia(id_aula:number):Promise<void>{
        await FrequenciaRepository.delete(id_aula);
    }
    public async updateFrequencia(id_aula: number, frequencia:Frequencia):Promise<void>{
        const frequenciaAlterada = await FrequenciaRepository.findOneBy(({id_aula}));
        if(frequenciaAlterada){
            await FrequenciaRepository.save(frequenciaAlterada);
        }else{
            console.log('usuario nao encontrado')
        }
        Promise.resolve();
    }
    
}
