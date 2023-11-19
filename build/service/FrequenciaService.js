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
const Frequencia_1 = __importDefault(require("../models/entities/Frequencia"));
const AulaRepository_1 = __importDefault(require("../models/entities/repositories/AulaRepository"));
const FrequenciaRepository_1 = __importDefault(require("../models/entities/repositories/FrequenciaRepository"));
class FrequenciaService {
    constructor() { }
    Frequencia(frequencia) {
        throw new Error("Professor não foi criado");
    }
    static getInstance() {
        if (!FrequenciaService.instance) {
            FrequenciaService.instance = new FrequenciaService();
        }
        return FrequenciaService.instance;
    }
    saveFrequencia(token_aluno, numero) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = new Date();
                let presenca = 0;
                var data_frequencia = `${data}`;
                const buscar_aula = yield AulaRepository_1.default.findOneBy({
                    id_aula: token_aluno,
                });
                const NewFrequencia = new Frequencia_1.default();
                if (buscar_aula == null || numero == null) {
                    return "nao encontrado";
                }
                else
                    NewFrequencia.id_aula = buscar_aula.id_aula;
                NewFrequencia.rm = numero;
                NewFrequencia.data_frequencia = data_frequencia;
                NewFrequencia.qtd_frequencia = true;
                const saveFreq = yield FrequenciaRepository_1.default.save(NewFrequencia);
                return saveFreq;
            }
            catch (err) {
                console.log(err);
                console.log("erro");
                Promise.reject(err);
            }
        });
    }
    listFrequencia() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FrequenciaRepository_1.default.find();
        });
    }
    findFrequenciaByRm(rm) {
        return __awaiter(this, void 0, void 0, function* () {
            if (rm) {
                const res = yield FrequenciaRepository_1.default.find();
                const mapRes = res.map((res) => ({
                    data: res.data_frequencia,
                    rm: res.rm
                }));
                console.log(mapRes.length);
                return mapRes;
            }
            else {
                console.log("erro");
            }
        });
    }
    somaFrequencia(mapRes, rm) {
        return __awaiter(this, void 0, void 0, function* () {
            mapRes.length();
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
            const frequenciaAlterada = yield FrequenciaRepository_1.default.findOneBy({
                id_frequencia,
            });
            if (frequenciaAlterada) {
                yield FrequenciaRepository_1.default.save(frequenciaAlterada);
            }
            else {
                console.log("usuario nao encontrado");
            }
            Promise.resolve();
        });
    }
}
exports.default = FrequenciaService;
