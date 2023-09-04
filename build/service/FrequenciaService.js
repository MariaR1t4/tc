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
const FrequenciaRepository_1 = __importDefault(require("../models/entities/repositories/FrequenciaRepository"));
class FrequenciaService {
    constructor() {
    }
    Frequencia(frequencia) {
        throw new Error('Professor não foi criado');
    }
    static getInstance() {
        if (!FrequenciaService.instance) {
            FrequenciaService.instance = new FrequenciaService();
        }
        ;
        return FrequenciaService.instance;
    }
    saveFrequencia(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FrequenciaRepository_1.default.save(obj);
        });
    }
    listFrequencia() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FrequenciaRepository_1.default.find();
        });
    }
    findFrequencia(id_frequencia) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FrequenciaRepository_1.default.findOneBy({ id_frequencia });
        });
    }
    deleteFrequencia(id_frequencia) {
        return __awaiter(this, void 0, void 0, function* () {
            yield FrequenciaRepository_1.default.delete(id_frequencia);
        });
    }
    updateFrequencia(id_frequencia, frequencia) {
        return __awaiter(this, void 0, void 0, function* () {
            const frequenciaAlterada = yield FrequenciaRepository_1.default.findOneBy(({ id_frequencia }));
            if (frequenciaAlterada) {
                frequenciaAlterada.lista_chamada = frequencia.lista_chamada;
                yield FrequenciaRepository_1.default.save(frequenciaAlterada);
            }
            Promise.resolve();
        });
    }
}
exports.default = FrequenciaService;
