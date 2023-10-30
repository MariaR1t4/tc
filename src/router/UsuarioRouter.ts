import { Router } from "express";
import UsuarioController from "../controller/UsuarioController";

const usuarioRouter = Router();

usuarioRouter.post('/cadastro', UsuarioController.getInstance().saveUsuario);
usuarioRouter.get('/lista-usuario', UsuarioController.getInstance().listUsuario);
usuarioRouter.delete('/delete-usuario/:email', UsuarioController.getInstance().deleteusuario);

export default usuarioRouter