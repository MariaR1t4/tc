import { Router } from "express";
import UsuarioController from "../controller/UsuarioController";

const usuarioRouter = Router();

usuarioRouter.post('/sign-up', UsuarioController.getInstance().saveUsuario);

export default usuarioRouter