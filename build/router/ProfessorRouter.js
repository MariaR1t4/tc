"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfessorController_1 = __importDefault(require("../controller/ProfessorController"));
const professorRouter = (0, express_1.Router)();
professorRouter.post('/', ProfessorController_1.default.getInstance().saveProfessor);
professorRouter.get('/', ProfessorController_1.default.getInstance().listProfessor);
professorRouter.get('/:id_tabela_professor', ProfessorController_1.default.getInstance().findProfessor);
professorRouter.delete('/:id_tabela_professor', ProfessorController_1.default.getInstance().deleteProfessor);
professorRouter.put('/:id_tabela_professor', ProfessorController_1.default.getInstance().updateProfessor);
exports.default = professorRouter;
