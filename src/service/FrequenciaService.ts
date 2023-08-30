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
    public async getFrequenciaById(id:number) : Promise<Frequencia | null> {
        return await FrequenciaRepositorie.findOneBy({randomNumber: id}); 
    }
    public async deleteFrequenciaById(id:number):Promise<void>{
        await FrequenciaRepositorie.delete(id);
    }
    public async updateFrequenciaById(id: number, Frequencia:Frequencia):Promise<void>{
        const FrequenciaNow = await FrequenciaRepositorie.findOneBy(({randomNumber: id}));
        if(FrequenciaNow){
//            FrequenciaNow.rm = Frequencia.rm;
            FrequenciaNow.name = Frequencia.name;
            FrequenciaNow.email = Frequencia.email;
            FrequenciaNow.telefone = Frequencia.telefone;
            FrequenciaNow.password = Frequencia.password;
            await FrequenciaRepositorie.save(FrequenciaNow);
        }
        Promise.resolve();
    }
    
}