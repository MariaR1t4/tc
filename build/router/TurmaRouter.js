"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TurmaController_1 = __importDefault(require("../controller/TurmaController"));
const turmaRouter = (0, express_1.Router)();
turmaRouter.post('/', TurmaController_1.default.getInstance().saveTurma);
turmaRouter.get('/list', TurmaController_1.default.getInstance().listTurma);
turmaRouter.get('/:id_turma', TurmaController_1.default.getInstance().findTurma);
turmaRouter.delete('/:id_turma', TurmaController_1.default.getInstance().deleteTurma);
turmaRouter.put('/edita/:id_turma', TurmaController_1.default.getInstance().updateTurma);
exports.default = turmaRouter;
