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
const TurmaRepository_1 = __importDefault(require("../models/entities/dtos/repositories/TurmaRepository"));
class TurmaService {
    constructor() {
    }
    criaTurma(turma) {
        throw new Error('Turma não pôde ser criada');
    }
    static getInstance() {
        if (!TurmaService.instance) {
            TurmaService.instance = new TurmaService();
        }
        ;
        return TurmaService.instance;
    }
    saveTurma(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TurmaRepository_1.default.save(obj);
        });
    }
    listTurma() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TurmaRepository_1.default.find();
        });
    }
    findTurma(id_turma) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TurmaRepository_1.default.findOneBy({ id_turma });
        });
    }
    deleteTurma(id_turma) {
        return __awaiter(this, void 0, void 0, function* () {
            yield TurmaRepository_1.default.delete(id_turma);
        });
    }
    updateTurma(id_turma, turma) {
        return __awaiter(this, void 0, void 0, function* () {
            const turmaAlterada = yield TurmaRepository_1.default.findOneBy(({ id_turma }));
            if (turmaAlterada) {
                turmaAlterada.curso = turma.curso;
                turmaAlterada.periodo = turma.periodo;
                turmaAlterada.modulo = turma.modulo;
                turmaAlterada.descricao = turma.descricao;
                yield TurmaRepository_1.default.save(turmaAlterada);
            }
            Promise.resolve();
        });
    }
}
exports.default = TurmaService;
