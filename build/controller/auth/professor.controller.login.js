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
const ProfessorServiceLogin_1 = __importDefault(require("../../service/login/ProfessorServiceLogin"));
class ProfessorLoginController {
    loginProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = req.body;
            try {
                const token = yield new ProfessorServiceLogin_1.default().loginProf(email, senha);
                res.json({ token });
                console.log(token);
            }
            catch (err) {
                res.status(401).send('Login failed');
            }
        });
    }
    signUpProf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha, name, telefone } = req.body;
            yield new ProfessorServiceLogin_1.default().signUpProf(email, senha, name, telefone);
            res.json('Cadastro criado com sucesso!');
        });
    }
    signUpProfessorInBatch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.file);
            yield new ProfessorServiceLogin_1.default().signUpProfessorInBatch(req);
            res.json('OK!');
        });
    }
}
exports.default = ProfessorLoginController;
