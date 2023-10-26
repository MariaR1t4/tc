import { Request, Response } from "express";

import UsuarioService from "../service/login/UsuarioService";

export default class UsuarioController{
    private static instance: UsuarioController;

    private constructor(){

    }

    public static getInstance(){
        if(!UsuarioController.instance){
            UsuarioController.instance = new UsuarioController();
        }
        return UsuarioController.instance;
    }
    public async saveUsuario(req: Request, res: Response) {
        const usuario = UsuarioService.getInstance();
        const userfront = req.body;
        const usercriado = await usuario.saveUsuario(userfront);
        res.json(usercriado)
    }

}