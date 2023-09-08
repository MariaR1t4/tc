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
const ProfessorDisciplinaService_1 = __importDefault(require("../service/ProfessorDisciplinaService"));
class ProfessorDisciplinaController {
    constructor() {
    }
    static getInstance() {
        if (!ProfessorDisciplinaController.instance) {
            ProfessorDisciplinaController.instance = new ProfessorDisciplinaController();
        }
        return ProfessorDisciplinaController.instance;
    }
    saveProfessorDisciplina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professor_disciplina = ProfessorDisciplinaService_1.default.getInstance();
            const professorDisciplina = req.body;
            const professorDisciplinaCriada = yield professor_disciplina.saveProfessorDisciplina(professorDisciplina);
            res.json(professorDisciplinaCriada);
        });
    }
    listProfessorDisciplina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorDisciplinaService = ProfessorDisciplinaService_1.default.getInstance();
            res.json(yield professorDisciplinaService.listProfessorDisciplina());
        });
    }
    findProfessorDisciplina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorDisciplinaService = ProfessorDisciplinaService_1.default.getInstance();
            const id_professor_disciplina = req.params.id_professor_disciplina;
            res.json(yield professorDisciplinaService.findProfessorDisciplina(parseInt(id_professor_disciplina)));
        });
    }
    deleteProfessorDisciplina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorDisciplinaService = ProfessorDisciplinaService_1.default.getInstance();
            const id_professor_disciplina = req.params.id_professor_disciplina;
            yield professorDisciplinaService.deleteProfessorDisciplina(parseInt(id_professor_disciplina));
            res.json('Aluno deletado');
        });
    }
    updateProfessorDisciplina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorDisciplinaService = ProfessorDisciplinaService_1.default.getInstance();
            const id_professor_disciplina = req.params.id_professor_disciplina;
            const professorDisciplina = req.body;
            yield professorDisciplinaService.updateProfessorDisciplina(parseInt(id_professor_disciplina), professorDisciplina);
            res.json('Atualização feita com sucesso!');
        });
    }
}
exports.default = ProfessorDisciplinaController;
