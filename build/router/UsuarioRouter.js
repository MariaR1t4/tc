"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_config_1 = require("../configs/multer-config");
const UsuarioController_1 = __importDefault(require("../controller/UsuarioController"));
const usuarioRouter = (0, express_1.Router)();
usuarioRouter.post('/cadastro', UsuarioController_1.default.getInstance().saveUsuario);
usuarioRouter.post('/cadastro-batch', multer_config_1.upload.single('csvFile'), UsuarioController_1.default.getInstance().cadastroBatch);
usuarioRouter.get('/lista-usuario', UsuarioController_1.default.getInstance().listUsuario);
usuarioRouter.put('/update/:email', UsuarioController_1.default.getInstance().updateUsuario);
usuarioRouter.delete('/delete-usuario/:email', UsuarioController_1.default.getInstance().deleteusuario);
exports.default = usuarioRouter;
