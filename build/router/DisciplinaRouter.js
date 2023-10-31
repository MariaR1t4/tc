"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DisciplinaController_1 = __importDefault(require("../controller/DisciplinaController"));
const disciplinaRouter = (0, express_1.Router)();
disciplinaRouter.post('/cria-disciplina', DisciplinaController_1.default.getInstance().saveDisciplina);
disciplinaRouter.get('/lista-disciplina', DisciplinaController_1.default.getInstance().listDisciplina);
disciplinaRouter.get('/encontra-disciplina/:id_disciplina', DisciplinaController_1.default.getInstance().findDisciplina);
disciplinaRouter.delete('/deleta-disciplina/:id_disciplina', DisciplinaController_1.default.getInstance().deleteDisciplina);
disciplinaRouter.put('/edita-disciplina/:id_disciplina', DisciplinaController_1.default.getInstance().updateDisciplina);
exports.default = disciplinaRouter;
