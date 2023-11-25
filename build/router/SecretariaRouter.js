"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.professorDisciplinaRouter = void 0;
const express_1 = require("express");
const SecretariaController_1 = __importDefault(require("../controller/SecretariaController"));
exports.professorDisciplinaRouter = (0, express_1.Router)();
exports.professorDisciplinaRouter.post('/cria-secretaria', SecretariaController_1.default.getInstance().saveSecretaria);
exports.professorDisciplinaRouter.get('/lista-secretaria', SecretariaController_1.default.getInstance().listSecretaria);
exports.professorDisciplinaRouter.get('/encontra-secretaria/:id_secretaria', SecretariaController_1.default.getInstance().findSecretaria);
exports.professorDisciplinaRouter.delete('/deleta-secretaria/:id_secretaria', SecretariaController_1.default.getInstance().deleteSecretaria);
exports.professorDisciplinaRouter.put('/edita-secretaria/:id_secretaria', SecretariaController_1.default.getInstance().updateSecretaria);
