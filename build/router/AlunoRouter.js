"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.frequenciaRouter = void 0;
const express_1 = require("express");
const AlunoController_1 = __importDefault(require("../controller/AlunoController"));
const FrequenciaController_1 = __importDefault(require("../controller/FrequenciaController"));
const alunoRouter = (0, express_1.Router)();
//secretaria quem faz
alunoRouter.post('/cria-aluno', AlunoController_1.default.getInstance().saveAluno);
alunoRouter.get('/lista-aluno', AlunoController_1.default.getInstance().listAluno);
alunoRouter.get('/find-aluno/:rm', AlunoController_1.default.getInstance().findAlunoById);
alunoRouter.delete('/delete-aluno/:rm', AlunoController_1.default.getInstance().deleteAluno);
alunoRouter.put('/update-aluno/:rm', AlunoController_1.default.getInstance().updateAluno);
exports.frequenciaRouter = (0, express_1.Router)();
exports.frequenciaRouter.post('/', FrequenciaController_1.default.getInstance().saveFrequencia);
exports.default = alunoRouter;
