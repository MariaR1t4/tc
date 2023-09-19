"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const professor_controller_login_1 = __importDefault(require("../../controller/auth/professor.controller.login"));
const aluno_controller_login_1 = __importDefault(require("../../controller/auth/aluno.controller.login"));
const authRouter = (0, express_1.Router)();
authRouter.post('/login/aluno', new aluno_controller_login_1.default().loginAluno);
authRouter.post('/login/professor', new professor_controller_login_1.default().loginProfessor);
/*authRouter.post('/sign-up', new UserLoginController().signUpAluno)
authRouter.post('/batch-sign-up', upload.single('csvFile'), new UserLoginController().signUpAlunosInBatch)*/
exports.default = authRouter;
