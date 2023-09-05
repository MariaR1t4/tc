"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfessorDisciplinaController_1 = __importDefault(require("../controller/ProfessorDisciplinaController"));
const professorDisciplinaRouter = (0, express_1.Router)();
professorDisciplinaRouter.post('/', ProfessorDisciplinaController_1.default.getInstance().saveProfessorDisciplina);
professorDisciplinaRouter.get('/', ProfessorDisciplinaController_1.default.getInstance().listProfessorDisciplina);
professorDisciplinaRouter.get('/:id_professor_disciplina', ProfessorDisciplinaController_1.default.getInstance().findProfessorDisciplina);
professorDisciplinaRouter.delete('/:id_professor_disciplina', ProfessorDisciplinaController_1.default.getInstance().deleteProfessorDisciplina);
professorDisciplinaRouter.put('/:id_professor_disciplina', ProfessorDisciplinaController_1.default.getInstance().updateProfessorDisciplina);
exports.default = professorDisciplinaRouter;
