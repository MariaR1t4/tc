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
const FrequenciaService_1 = __importDefault(require("../service/FrequenciaService"));
class FrequenciaController {
    constructor() { }
    static getInstance() {
        if (!FrequenciaController.instance) {
            FrequenciaController.instance = new FrequenciaController();
        }
        return FrequenciaController.instance;
    }
    saveFrequencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const frequenciaService = FrequenciaService_1.default.getInstance();
            const { token_aluno, rm } = req.body;
            const presenca = req.params.presenca;
            if (!rm) {
                res.status(400).send("rm nao encontrado");
            }
            if (token_aluno && rm) {
                const frequenciaCriada = yield frequenciaService.saveFrequencia(token_aluno, rm);
                if (frequenciaCriada) {
                    console.log(presenca);
                }
                res.json(frequenciaCriada);
            }
            else
                res.status(400).json("tente novamente");
        });
    }
    listFrequencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const frequenciaService = FrequenciaService_1.default.getInstance();
            res.json(yield frequenciaService.listFrequencia());
        });
    }
    findFrequenciaByRm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const frequenciaService = FrequenciaService_1.default.getInstance();
                const rm = req.body;
                if (!rm) {
                    res.status(400).send({ err: "rm vazio/inexistente" });
                }
                res.json(yield frequenciaService.findFrequenciaByRm(rm));
            }
            catch (err) {
                console.log(err);
                return res.status(400).send({ err: "nao foi possivel encontrar aula" });
            }
        });
    }
    deleteFrequencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const frequenciaService = FrequenciaService_1.default.getInstance();
            const id_frequencia = req.params.id_frequencia;
            yield frequenciaService.deleteFrequencia(id_frequencia);
            res.json("Frequencia deletada");
        });
    }
    updateFrequencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const frequenciaService = FrequenciaService_1.default.getInstance();
            const id_frequencia = req.params.id_frequencia;
            const frequencia = req.body;
            yield frequenciaService.updateFrequencia(id_frequencia, frequencia);
            res.json("Lista de frequencia alterada");
        });
    }
}
exports.default = FrequenciaController;
