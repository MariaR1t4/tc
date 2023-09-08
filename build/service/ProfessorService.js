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
const ProfessorRepository_1 = __importDefault(require("../models/entities/repositories/ProfessorRepository"));
class ProfessorService {
    constructor() {
    }
    criaProfessor(professor) {
        throw new Error('Professor não foi criado');
    }
    static getInstance() {
        if (!ProfessorService.instance) {
            ProfessorService.instance = new ProfessorService();
        }
        ;
        return ProfessorService.instance;
    }
    saveProfessor(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProfessorRepository_1.default.save(obj);
        });
    }
    listProfessor() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProfessorRepository_1.default.find();
        });
    }
    findProfessor(id_tabela_professor) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProfessorRepository_1.default.findOneBy({ id_tabela_professor });
        });
    }
    deleteProfessor(id_tabela_professor) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ProfessorRepository_1.default.delete(id_tabela_professor);
        });
    }
    updateProfessor(id_tabela_professor, professor) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorAlterado = yield ProfessorRepository_1.default.findOneBy(({ id_tabela_professor }));
            if (professorAlterado) {
                professorAlterado.name = professor.name;
                professorAlterado.telefone = professor.telefone;
                professorAlterado.email = professor.email;
                professorAlterado.password = professor.password;
                yield ProfessorRepository_1.default.save(professorAlterado);
            }
            Promise.resolve();
        });
    }
}
exports.default = ProfessorService;
