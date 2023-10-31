"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aulaRouter = void 0;
const express_1 = require("express");
const AulaController_1 = __importDefault(require("../controller/AulaController"));
//AULA ROUTER
exports.aulaRouter = (0, express_1.Router)();
exports.aulaRouter.post('/cria-aula', AulaController_1.default.getInstance().saveAula);
exports.aulaRouter.get('/lista-aula', AulaController_1.default.getInstance().listAula);
//aulaRouter.get('/encontra-aula/:id_aula',AulaController.getInstance().findAula);
/*
aulaRouter.delete('/deleta-aula/:id_aula',AulaController.getInstance().deleteAula);
aulaRouter.put('/edita-aula/:id_aula',AulaController.getInstance().updateAula);*/
exports.default = exports.aulaRouter;
