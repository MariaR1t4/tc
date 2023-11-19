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
const AlunoServiceLogin_1 = __importDefault(require("../service/login/AlunoServiceLogin"));
class AlunoController {
    constructor() { }
    static getInstance() {
        if (!AlunoController.instance) {
            AlunoController.instance = new AlunoController();
        }
        return AlunoController.instance;
    }
    saveAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alunoService = AlunoService_1.default.getInstance();
                const aluno = req.body;
                const alunoCriado = yield alunoService.saveAluno(aluno);
                res.json(alunoCriado);
            }
            catch (err) {
                console.log(err);
                return res.status(400).send({ err: "nao foi possivel criar aluno" });
            }
        });
    }
    listAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alunoService = AlunoService_1.default.getInstance();
                res.json(yield alunoService.listAluno());
            }
            catch (err) {
                return res.json(400).send({ erro: "Não foi possivel listar aluno" });
            }
        });
    }
    findAlunoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alunoService = AlunoService_1.default.getInstance();
                const rm = req.params.rm;
                if (!rm) {
                    res.status(400).send({ err: "rm nao encontrado" });
                }
                res.json(yield alunoService.findAlunoById(parseInt(rm)));
            }
            catch (err) {
                console.log(err);
                return res.status(400).send({ err: "nao foi possivel encontrar aluno" });
            }
        });
    }
    deleteAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alunoService = AlunoService_1.default.getInstance();
                const rm = req.params.rm;
                yield alunoService.deleteAluno(parseInt(rm));
                res.json("Aluno deletado");
            }
            catch (err) {
                console.log(err);
                return res.status(400).send({ err: "nao foi possivel encontrar aluno" });
            }
        });
    }
    updateAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alunoService = AlunoService_1.default.getInstance();
                const rm = req.params.rm;
                const aluno = req.body;
                yield alunoService.updateAluno(parseInt(rm), aluno);
                res.json("Atualização feita com sucesso!");
            }
            catch (err) {
                console.log(err);
                return res.status(400).send({ err: "nao foi possivel encontrar aluno" });
            }
        });
    }
    singUpBatchAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.file);
            yield new AlunoServiceLogin_1.default().signUpAlunosInBatch(req);
            res.json('ok');
        });
    }
}
exports.default = AlunoController;
