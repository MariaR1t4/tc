import UsuarioService from "../service/UsuarioService";

export default class UsuarioController {
    private static instance: UsuarioController;

    private constructor(){

    }

    public static getInstance(){
        if(!UsuarioController.instance){
            UsuarioController.instance = new UsuarioController();
        }
        return UsuarioController.instance;
    }

    /*public async saveUsuario(req: Request, res: Response) {
        const usuarioService = UsuarioService.getInstance();
        const usuario = req.body;
        const user = await usuarioService.saveUsuario(usuario);
        res.json(user);
    }*/
}