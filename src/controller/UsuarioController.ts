
import { Request, Response } from "express";
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


    public async saveUsuario(req: Request, res: Response) {
        const usuarioService = UsuarioService.getInstance();
        const usuario = req.body;
        
        const user = await usuarioService.saveUsuario(usuario);
        res.json(user);
    }

    public async listUsuario(req: Request,res: Response){
      const usuario = UsuarioService.getInstance();
      res.json(await usuario.listaUsuario());
     }

     public async updateUsuario(req: Request, res: Response) {
      try {
        const usuarioService = UsuarioService.getInstance();
        const email = req.params.rm;
        const usuario = req.body;
        await usuarioService.updateUsuario(email, usuario);
        res.json("Atualização feita com sucesso!");
      } catch (err) {
        console.log(err);
        return res.status(400).send({ err: "nao foi possivel encontrar aluno" });
      }
    }

     public async deleteusuario(req: Request,res:Response){
      const usuario = UsuarioService.getInstance();
      const email = req.params.email;
      await usuario.deleteUsuario(email);
      res.json('Usuario deletado');
  }

    public async cadastroBatch(req: Request,res:Response){
      console.log(req.file);
      await UsuarioService.getInstance().signUpInBatch(req);
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
