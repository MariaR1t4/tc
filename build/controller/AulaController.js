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
const AulaService_1 = __importDefault(require("../service/AulaService"));
class AulaController {
    constructor() {
    }
    static getInstance() {
        if (!AulaController.instance) {
            AulaController.instance = new AulaController();
        }
        return AulaController.instance;
    }
    saveAula(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const aulaService = AulaService_1.default.getInstance();
            const aula = req.body;
            const aulaCriada = yield aulaService.saveAula(aula);
            res.json(aulaCriada);
        });
    }
    listAula(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const aulaService = AulaService_1.default.getInstance();
            res.json(yield aulaService.listAula());
        });
    }
    findAulaById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const aulaService = AulaService_1.default.getInstance();
                const id_aula = req.params.id_aula;
                if (!id_aula) {
                    res.status(400).send({ err: "aula nao encontrada" });
                }
                res.json(yield aulaService.findAulaById(id_aula));
            }
            catch (err) {
                console.log(err);
                return res.status(400).send({ err: "nao foi possivel encontrar rm" });
            }
        });
    }
    deleteAula(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const aulaService = AulaService_1.default.getInstance();
            const id_aula = req.params.id_aula;
            yield aulaService.deleteAula(id_aula);
            res.json('aula deletada');
        });
    }
    updateAula(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const aulaService = AulaService_1.default.getInstance();
            const id_aula = req.params.id_aula;
            const aula = req.body;
            yield aulaService.updateAula((id_aula), aula);
            res.json('Atualização feita com sucesso!');
        });
    }
}
exports.default = AulaController;
