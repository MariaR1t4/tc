"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AlunoServiceLogin_1 = __importDefault(require("../../service/login/AlunoServiceLogin"));
class AlunoLoginController {
    loginAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rm, senha } = req.body;
            try {
                const token = yield new AlunoServiceLogin_1.default().loginAluno(rm, senha);
                res.json({ token });
                console.log(token);
            }
            catch (err) {
                res.status(401).send("Login failed");
            }
        });
    }
    signUpAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rm, senha, telefone, nome, email } = req.body;
            yield new AlunoServiceLogin_1.default().signUpAluno(rm, senha, telefone, nome, email);
            res.json('Cadastro criado com sucesso!');
        });
    }
    signUpAlunosInBatch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.file);
            yield new AlunoServiceLogin_1.default().signUpAlunosInBatch(req);
            res.json('OK!');
        });
    }
    updateAlunoImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.file);
            yield new AlunoServiceLogin_1.default().updateAlunoImage(req);
            res.json('OK!');
        });
    }
}
exports.default = AlunoLoginController;
