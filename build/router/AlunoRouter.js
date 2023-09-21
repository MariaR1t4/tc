"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AlunoController_1 = __importDefault(require("../controller/AlunoController"));
const alunoRouter = (0, express_1.Router)();
alunoRouter.post('/', AlunoController_1.default.getInstance().saveAluno);
alunoRouter.get('/', AlunoController_1.default.getInstance().listAluno);
alunoRouter.get('/:rm', AlunoController_1.default.getInstance().findAlunoById);
alunoRouter.delete('/:rm', AlunoController_1.default.getInstance().deleteAluno);
alunoRouter.put('/:rm', AlunoController_1.default.getInstance().updateAluno);
exports.default = alunoRouter;
