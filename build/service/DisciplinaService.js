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
<<<<<<< HEAD
const DisciplinaRepository_1 = __importDefault(require("../models/entities/dtos/repositories/DisciplinaRepository"));
=======
const DisciplinaRepository_1 = __importDefault(require("../models/entities/repositories/DisciplinaRepository"));
>>>>>>> 8e71852d88985ae45487ec3c01bac48c82ef3b07
class DisciplinaService {
    constructor() {
    }
    criaDisciplina(disciplina) {
        throw new Error('Disciplina não foi criada');
    }
    static getInstance() {
        if (!DisciplinaService.instance) {
            DisciplinaService.instance = new DisciplinaService();
        }
        ;
        return DisciplinaService.instance;
    }
    saveDisciplina(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DisciplinaRepository_1.default.save(obj);
        });
    }
    listDisciplina() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DisciplinaRepository_1.default.find();
        });
    }
    findDisciplina(id_disciplina) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DisciplinaRepository_1.default.findOneBy({ id_disciplina });
        });
    }
    deleteDisciplina(id_disciplina) {
        return __awaiter(this, void 0, void 0, function* () {
            yield DisciplinaRepository_1.default.delete(id_disciplina);
        });
    }
    updateDisciplina(id_disciplina, disciplina) {
        return __awaiter(this, void 0, void 0, function* () {
            const disciplinaAlterada = yield DisciplinaRepository_1.default.findOneBy(({ id_disciplina }));
            if (disciplinaAlterada) {
                disciplinaAlterada.descricao = disciplina.descricao;
                yield DisciplinaRepository_1.default.save(disciplinaAlterada);
            }
            Promise.resolve();
        });
    }
}
exports.default = DisciplinaService;
