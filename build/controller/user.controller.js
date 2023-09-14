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
const AlunoServiceLogin_1 = __importDefault(require("../service/login/AlunoServiceLogin"));
class AlunoLoginController {
    loginAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = req.body;
            try {
                const token = yield new AlunoServiceLogin_1.default().loginAluno(email, senha);
                res.json({ token });
            }
            catch (err) {
                res.status(401).send("Login failed");
            }
        });
    }
    signUpAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = req.body;
            yield new AlunoServiceLogin_1.default().signUpAluno(email, senha);
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
