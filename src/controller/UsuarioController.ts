import UsuarioService from "../service/UsuarioService";
import { Request, Response } from "express";

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


    public async saveUsuario(req: Request, res: Response) {
        const usuarioService = UsuarioService.getInstance();
        const usuario = req.body;
        
        const user = await usuarioService.saveUsuario(usuario);
        res.json(user);
    }

    public async listUsuario(req: Request,res: Response){
      const usuario = UsuarioService.getInstance();
      res.json(await usuario.listUsuario());
     }

     public async deleteusuario(req: Request,res:Response){
      const usuario = UsuarioService.getInstance();
      const email = req.params.email;
      await usuario.deleteUsuario(email);
      res.json('Usuario deletado');
  }

}

/*

// Initialize Firebase Admin SDK
const serviceAccount = require('/path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Authenticate a user with Firebase Authentication
admin.auth().signInWithEmailAndPassword(email, password)
  .then(userCredential => {
    // User is authenticated
    const user = userCredential.user;
    console.log(`User ${user.email} is authenticated`);
  })
  .catch(error => {
    // Authentication failed
    console.error('Authentication failed:', error);
  })*/