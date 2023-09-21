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
    public async findFrequencia(id_frequencia:number) : Promise<Frequencia | null> {
        return await FrequenciaRepository.findOneBy({id_frequencia}); 
    }
    public async deleteFrequencia(id_frequencia:number):Promise<void>{
        await FrequenciaRepository.delete(id_frequencia);
    }
    public async updateFrequencia(id_frequencia: number, frequencia:Frequencia):Promise<void>{
        const frequenciaAlterada = await FrequenciaRepository.findOneBy(({id_frequencia}));
        if(frequenciaAlterada){
          frequenciaAlterada.lista_chamada = frequencia.lista_chamada;
            await FrequenciaRepository.save(frequenciaAlterada);
        }else{
            console.log('usuario nao encontrado')
        }
        Promise.resolve();
    }
    
}
