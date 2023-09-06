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
const DisciplinaService_1 = __importDefault(require("../service/DisciplinaService"));
class DisciplinaController {
    constructor() {
    }
    static getInstance() {
        if (!DisciplinaController.instance) {
            DisciplinaController.instance = new DisciplinaController();
        }
        return DisciplinaController.instance;
    }
    saveDisciplina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const disciplinaService = DisciplinaService_1.default.getInstance();
            const disciplina = req.body;
            const disciplinaCriada = yield disciplinaService.saveDisciplina(disciplina);
            res.json(disciplinaCriada);
        });
    }
    listDisciplina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const disciplinaService = DisciplinaService_1.default.getInstance();
            res.json(yield disciplinaService.listDisciplina());
        });
    }
    findDisciplina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const disciplinaService = DisciplinaService_1.default.getInstance();
            const id_disciplina = req.params.id_disciplina;
            res.json(yield disciplinaService.findDisciplina(parseInt(id_disciplina)));
        });
    }
    deleteDisciplina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const disciplinaService = DisciplinaService_1.default.getInstance();
            const id_disciplina = req.params.id_disciplina;
            yield disciplinaService.deleteDisciplina(parseInt(id_disciplina));
            res.json('Disciplina deletada');
        });
    }
    updateDisciplina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const disciplinaService = DisciplinaService_1.default.getInstance();
            const id_disciplina = req.params.id_disciplina;
            const disciplina = req.body;
            yield disciplinaService.updateDisciplina(parseInt(id_disciplina), disciplina);
            res.json('Atualização feita com sucesso!');
        });
    }
}
exports.default = DisciplinaController;
