"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfessorController_1 = __importDefault(require("../controller/ProfessorController"));
const professorRouter = (0, express_1.Router)();
professorRouter.post('/cria-professor', ProfessorController_1.default.getInstance().saveProfessor);
professorRouter.get('/lista-professor', ProfessorController_1.default.getInstance().listProfessor);
professorRouter.get('/encontra-professor/:id_tabela_professor', ProfessorController_1.default.getInstance().findProfessor);
professorRouter.delete('/deleta-professor/:id_tabela_professor', ProfessorController_1.default.getInstance().deleteProfessor);
professorRouter.put('/edita-professor/:id_tabela_professor', ProfessorController_1.default.getInstance().updateProfessor);
exports.default = professorRouter;
