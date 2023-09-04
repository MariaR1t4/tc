"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TurmaController_1 = __importDefault(require("../controller/TurmaController"));
const TurmaRouter = (0, express_1.Router)();
TurmaRouter.post('/', TurmaController_1.default.getInstance().saveTurma);
TurmaRouter.get('/', TurmaController_1.default.getInstance().listTurma);
TurmaRouter.get('/:id_turma', TurmaController_1.default.getInstance().findTurma);
TurmaRouter.delete('/:id_turma', TurmaController_1.default.getInstance().deleteTurma);
TurmaRouter.put('/:id_turma', TurmaController_1.default.getInstance().updateTurma);
exports.default = TurmaRouter;
