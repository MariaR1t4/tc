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
const typeorm_1 = require("typeorm");
const ProfessorDisciplina_1 = __importDefault(require("../models/entities/ProfessorDisciplina"));
const ProfessorDisciplinaRepository_1 = __importDefault(require("../models/entities/repositories/ProfessorDisciplinaRepository"));
class ProfessorDisciplinaService {
    constructor() {
    }
    criaProfessorDisciplina(professorDisciplina) {
        throw new Error('Não foi criado');
    }
    static getInstance() {
        if (!ProfessorDisciplinaService.instance) {
            ProfessorDisciplinaService.instance = new ProfessorDisciplinaService();
        }
        ;
        return ProfessorDisciplinaService.instance;
    }
    saveProfessorDisciplina(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProfessorDisciplinaRepository_1.default.save(obj);
        });
    }
    listProfessorDisciplina() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProfessorDisciplinaRepository_1.default.find();
        });
    }
    findProfessorDisciplina(professor_disciplina) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProfessorDisciplinaRepository_1.default.findOneBy({ professor_disciplina });
        });
    }
    deleteProfessorDisciplina(professor_disciplina) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ProfessorDisciplinaRepository_1.default.delete(professor_disciplina);
        });
    }
    updateProfessorDisciplina(professor_disciplina, professorDisciplina) {
        return __awaiter(this, void 0, void 0, function* () {
            const professorDisciplinaAlterado = yield ProfessorDisciplinaRepository_1.default.findOneBy(({ professor_disciplina }));
            if (professorDisciplinaAlterado) {
                professorDisciplinaAlterado.id_turma = professorDisciplina.id_turma;
                professorDisciplinaAlterado.id_disciplina = professorDisciplina.id_disciplina;
                professorDisciplinaAlterado.professor_disciplina = professorDisciplina.professor_disciplina;
                professorDisciplinaAlterado.id_professor = professorDisciplina.id_professor;
                professorDisciplinaAlterado.carga_horaria = professorDisciplina.carga_horaria;
                yield ProfessorDisciplinaRepository_1.default.save(professorDisciplinaAlterado);
            }
            Promise.resolve();
        });
    }
    professorDisciplina(id_professor) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, typeorm_1.getRepository)(ProfessorDisciplina_1.default)
                .createQueryBuilder('professor_disciplina')
                .innerJoinAndSelect('professor_disciplina.idProfessor', 'professor')
                .innerJoinAndSelect('professor_disciplina.idDisciplina', 'disciplina')
                .select([
                'professor_disciplina.idProfessor as idProfessor',
                'professor_disciplina.idDisciplina as idDisciplina',
                'professor.nome',
            ])
                .getRawMany();
            console.log(response);
            // const professor = {
            //     nome: response.nome
            //     disciplina : response.disciplina
            // }
            //return professor
        });
    }
}
exports.default = ProfessorDisciplinaService;
