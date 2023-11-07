import Secretaria from "../models/entities/Secretaria";
import SecretariaRepository from "../models/entities/repositories/SecretariaRepository";

export default class SecretariaService{
    private constructor(){

    }
    private static instance: SecretariaService;
    public static getInstance(){
        if(!SecretariaService.instance){
            SecretariaService.instance = new SecretariaService();
        };
        return SecretariaService.instance;
    }
    public criaSecretaria(secretaria: Secretaria[]) {
        throw new Error('Secretaria não pôde ser criada');
    }
    public async saveSecretaria(obj: Secretaria):Promise<Secretaria>{
        console.log(obj);
        return await SecretariaRepository.save(obj);

    }
    public async listSecretaria():Promise<Secretaria[]>{
        return await SecretariaRepository.find();
    }
    public async findSecretaria(id_secretaria:string) : Promise<Secretaria | null> {
        return await SecretariaRepository.findOneBy(({id_secretaria})); 
    }
    public async deleteSecretaria(id_Secretaria:string):Promise<void>{
        await SecretariaRepository.delete(id_Secretaria);
    }
    public async updateSecretaria(id_secretaria: string, Secretaria:Secretaria):Promise<void>{
        const SecretariaAlterada = await SecretariaRepository.findOneBy(({id_secretaria}));
        if(SecretariaAlterada){
            SecretariaAlterada.nome = Secretaria.nome;
            SecretariaAlterada.usuario = Secretaria.usuario;
            await SecretariaRepository.save(SecretariaAlterada);
        }
        Promise.resolve();
    }
    
}
