import { Router } from "express";
import { upload } from "../configs/multer-config";
import UsuarioController from "../controller/UsuarioController";

const usuarioRouter = Router();

usuarioRouter.post('/cadastro', UsuarioController.getInstance().saveUsuario);
usuarioRouter.post('/cadastro-batch', upload.single('csvFile'), UsuarioController.getInstance().cadastroBatch);
usuarioRouter.get('/lista-usuario', UsuarioController.getInstance().listUsuario);
usuarioRouter.delete('/delete-usuario/:email', UsuarioController.getInstance().deleteusuario);

export default usuarioRouter