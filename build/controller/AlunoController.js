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
const AlunoService_1 = __importDefault(require("../service/AlunoService"));
class AlunoController {
    constructor() {
    }
    static getInstance() {
        if (!AlunoController.instance) {
            AlunoController.instance = new AlunoController();
        }
        return AlunoController.instance;
    }
    saveAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alunoService = AlunoService_1.default.getInstance();
            const aluno = req.body;
            const alunoCriado = yield alunoService.saveAluno(aluno);
            console.log(alunoCriado);
            res.json(alunoCriado);
        });
    }
    listAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alunoService = AlunoService_1.default.getInstance();
            res.json(yield alunoService.listAluno());
        });
    }
    findAlunoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alunoService = AlunoService_1.default.getInstance();
            const rm = req.params.rm;
            res.json(yield alunoService.findAlunoById(parseInt(rm)));
        });
    }
    deleteAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alunoService = AlunoService_1.default.getInstance();
            const rm = req.params.rm;
            yield alunoService.deleteAluno(parseInt(rm));
            res.json('Aluno deletado');
        });
    }
    updateAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alunoService = AlunoService_1.default.getInstance();
            const rm = req.params.rm;
            const aluno = req.body;
            yield alunoService.updateAluno(parseInt(rm), aluno);
            res.json('Atualização feita com sucesso!');
        });
    }
}
exports.default = AlunoController;
