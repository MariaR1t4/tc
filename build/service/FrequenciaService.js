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
const FrequenciaRepositorie_1 = __importDefault(require("../models/entities/repositories/FrequenciaRepositorie"));
class FrequenciaService {
    constructor() {
    }
    criaPessoas(Frequencia) {
        throw new Error('Frequencia was not implemented');
    }
    //create a new instance
    static getInstance() {
        if (!FrequenciaService.instance) {
            FrequenciaService.instance = new FrequenciaService();
        }
        ;
        return FrequenciaService.instance;
    }
    //save a instance
    saveFrequencia(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FrequenciaRepositorie_1.default.save(obj);
        });
    }
    getFrequencias() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FrequenciaRepositorie_1.default.find();
        });
    }
    getFrequenciaById(id_freq) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FrequenciaRepositorie_1.default.findOneBy({ id_freq });
        });
    }
    deleteFrequenciaById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield FrequenciaRepositorie_1.default.delete(id);
        });
    }
    updateFrequenciaById(id_freq, frequencia) {
        return __awaiter(this, void 0, void 0, function* () {
            const FrequenciaNow = yield FrequenciaRepositorie_1.default.findOneBy({ id_freq });
            if (FrequenciaNow) {
                FrequenciaNow.id_freq = frequencia.id_freq;
                FrequenciaNow.lista_chamada = frequencia.lista_chamada;
                FrequenciaNow.id_turma = frequencia.id_turma;
                FrequenciaNow.rm = frequencia.rm;
                FrequenciaNow.frequencia = frequencia.frequencia;
                yield FrequenciaRepositorie_1.default.save(FrequenciaNow);
            }
            Promise.resolve();
        });
    }
}
exports.default = FrequenciaService;
