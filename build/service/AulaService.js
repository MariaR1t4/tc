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
const Aula_1 = __importDefault(require("../models/entities/Aula"));
const AulaRepository_1 = __importDefault(require("../models/entities/repositories/AulaRepository"));
const generateToken_1 = __importDefault(require("../models/generateToken"));
class AulaService {
    constructor() {
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        else
            return new AulaService();
    }
    saveAula(aula) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAula = new Aula_1.default();
                const token = yield (0, generateToken_1.default)();
                newAula.id_aula = token;
                newAula.professor_disciplina = aula.professor_disciplina;
                newAula.descricao = aula.descricao;
                const saveAula = yield AulaRepository_1.default.save(newAula);
                return Promise.resolve(saveAula);
            }
            catch (err) {
                console.log("erro");
                return Promise.reject(err);
            }
        });
    }
    listAula() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AulaRepository_1.default.find();
        });
    }
    findAulaById(id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AulaRepository_1.default.findOneBy({ id_aula });
        });
    }
    deleteAula(id_aula) {
        return __awaiter(this, void 0, void 0, function* () {
            yield AulaRepository_1.default.delete(id_aula);
        });
    }
    updateAula(id_aula, aula) {
        return __awaiter(this, void 0, void 0, function* () {
            const aulaAlterada = yield AulaRepository_1.default.findOneBy({ id_aula });
            if (aulaAlterada) {
                yield AulaRepository_1.default.save(aulaAlterada);
            }
            else {
                console.log('aula nao encontrada');
            }
            Promise.resolve();
        });
    }
}
exports.default = AulaService;
