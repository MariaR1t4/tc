import Usuario from "../../models/entities/Usuario";
import UsuarioRepository from "../../models/entities/repositories/UsuarioRepository";

class UsuarioService {
    private constructor(){

    }
    criaProfessor(usuario: Usuario[]) {
        throw new Error('Usuario não foi cadastrado');
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
}

export default UsuarioService