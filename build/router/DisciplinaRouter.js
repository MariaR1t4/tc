"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DisciplinaController_1 = __importDefault(require("../controller/DisciplinaController"));
const disciplinaRouter = (0, express_1.Router)();
disciplinaRouter.post('/', DisciplinaController_1.default.getInstance().saveDisciplina);
disciplinaRouter.get('/', DisciplinaController_1.default.getInstance().listDisciplina);
disciplinaRouter.get('/:id_disciplina', DisciplinaController_1.default.getInstance().findDisciplina);
disciplinaRouter.delete('/:id_disciplina', DisciplinaController_1.default.getInstance().deleteDisciplina);
disciplinaRouter.put('/:id_disciplina', DisciplinaController_1.default.getInstance().updateDisciplina);
exports.default = disciplinaRouter;
