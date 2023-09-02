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
const TurmaRepositorie_1 = __importDefault(require("../models/entities/repositories/TurmaRepositorie"));
class TurmaService {
    constructor() {
    }
    criaTurma(turma) {
        throw new Error('Turma was not implemented');
    }
    //create a new instance
    static getInstance() {
        if (!TurmaService.instance) {
            TurmaService.instance = new TurmaService();
        }
        ;
        return TurmaService.instance;
    }
    //save a instance
    saveTurma(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TurmaRepositorie_1.default.save(obj);
        });
    }
    getTurmas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TurmaRepositorie_1.default.find();
        });
    }
    getTurmaById(id_turma) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TurmaRepositorie_1.default.findOneBy({ id_turma });
        });
    }
    deleteTurmaById(id_turma) {
        return __awaiter(this, void 0, void 0, function* () {
            yield TurmaRepositorie_1.default.delete(id_turma);
        });
    }
    updateTurmaById(id_turma, turma) {
        return __awaiter(this, void 0, void 0, function* () {
            const TurmaNow = yield TurmaRepositorie_1.default.findOneBy({ id_turma });
            if (TurmaNow) {
                //            UserNow.rm = User.rm;
                TurmaNow.id_turma = turma.id_turma;
                TurmaNow.curso = turma.curso;
                TurmaNow.periodo = turma.periodo;
                TurmaNow.modulo = turma.modulo;
                TurmaNow.descricao = turma.descricao;
                yield TurmaRepositorie_1.default.save(TurmaNow);
            }
            Promise.resolve();
        });
    }
}
exports.default = TurmaService;
