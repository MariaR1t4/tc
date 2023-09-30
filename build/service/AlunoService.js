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
const AlunoRepository_1 = __importDefault(require("../models/entities/repositories/AlunoRepository"));
class AlunoService {
    constructor() {
    }
    criaAluno(aluno) {
        throw new Error('Aluno não foi criado');
    }
    static getInstance() {
        if (!AlunoService.instance) {
            AlunoService.instance = new AlunoService();
        }
        ;
        return AlunoService.instance;
    }
    saveAluno(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AlunoRepository_1.default.save(obj);
        });
    }
    listAluno() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AlunoRepository_1.default.find();
        });
    }
    findAlunoById(rm) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield AlunoRepository_1.default.findOneBy({ rm });
            if (response == null) {
                return { erro: "id não existente !" };
            }
            return response;
        });
    }
    deleteAluno(rm) {
        return __awaiter(this, void 0, void 0, function* () {
            yield AlunoRepository_1.default.delete(rm);
        });
    }
    updateAluno(rm, aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            const alunoAlterado = yield AlunoRepository_1.default.findOneBy(({ rm }));
            if (alunoAlterado) {
                alunoAlterado.nome = aluno.nome;
                alunoAlterado.telefone = aluno.telefone;
                alunoAlterado.email = aluno.email;
                alunoAlterado.senha = aluno.senha;
                yield AlunoRepository_1.default.save(alunoAlterado);
            }
            Promise.resolve();
        });
    }
}
exports.default = AlunoService;
