"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_config_1 = require("../../configs/multer-config");
const professor_controller_login_1 = __importDefault(require("../../controller/auth/professor.controller.login"));
const aluno_controller_login_1 = __importDefault(require("../../controller/auth/aluno.controller.login"));
const authRouter = (0, express_1.Router)();
authRouter.post('/login/aluno', new aluno_controller_login_1.default().loginAluno);
authRouter.post('/login/professor', new professor_controller_login_1.default().loginProfessor);
authRouter.post('/alunos/batch-sign-up', multer_config_1.upload.single('csvFile'), new aluno_controller_login_1.default().signUpAlunosInBatch);
authRouter.post('/professor/batch-sign-up', multer_config_1.upload.single('csvFile'), new professor_controller_login_1.default().signUpProfessorInBatch);
exports.default = authRouter;
