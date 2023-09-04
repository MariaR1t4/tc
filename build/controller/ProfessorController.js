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
const ProfessorService_1 = __importDefault(require("../service/ProfessorService"));
class ProfessorController {
    constructor() {
    }
    static getInstance() {
        if (!ProfessorController.instance) {
            ProfessorController.instance = new ProfessorController();
        }
        return ProfessorController.instance;
    }
    saveProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorService = ProfessorService_1.default.getInstance();
            const professor = req.body;
            const professorCriado = yield professorService.saveProfessor(professor);
            res.json(professorCriado);
        });
    }
    listProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorService = ProfessorService_1.default.getInstance();
            res.json(yield professorService.listProfessor());
        });
    }
    findProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorService = ProfessorService_1.default.getInstance();
            const id_professor = req.params.id_professor;
            res.json(yield professorService.findProfessor(parseInt(id_professor)));
        });
    }
    deleteAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorService = ProfessorService_1.default.getInstance();
            const id_professor = req.params.id_professor;
            yield professorService.deleteProfessor(parseInt(id_professor));
            res.json('Professor deletado');
        });
    }
    updateProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorService = ProfessorService_1.default.getInstance();
            const id_professor = req.params.id_professor;
            const professor = req.body;
            yield professorService.updateProfessor(parseInt(id_professor), professor);
            res.json('Update feito');
        });
    }
}
exports.default = ProfessorController;
