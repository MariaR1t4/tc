import UsuarioRepository from "../models/entities/repositories/UsuarioRepository";
import Usuario from "../models/entities/Usuario";

export default class UsuarioService{
    private constructor(){

    }
    criaUsuario(usuario: Usuario[]) {
        throw new Error('Usuario não foi criado');
    }
    private static instance: UsuarioService;
    public static getInstance(){
        if(!UsuarioService.instance){
            UsuarioService.instance = new UsuarioService();
        };
        return UsuarioService.instance;
    }
    public async saveUsuario(obj: Usuario):Promise<Usuario>{
        return await UsuarioRepository.save(obj);
    }

    public async listUsuario():Promise<Usuario[]>{
        return await UsuarioRepository.find();
    }

    public async deleteUsuario(email:string):Promise<void>{
        await UsuarioRepository.delete(email);
    }


}

  