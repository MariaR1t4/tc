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
const SecretariaService_1 = __importDefault(require("../service/SecretariaService"));
class SecretariaController {
    constructor() {
    }
    static getInstance() {
        if (!SecretariaController.instance) {
            SecretariaController.instance = new SecretariaController();
        }
        return SecretariaController.instance;
    }
    saveSecretaria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const secretariaService = SecretariaService_1.default.getInstance();
            const secretaria = req.body;
            const secretariaCriada = yield secretariaService.saveSecretaria(secretaria);
            console.log(secretariaCriada);
            res.json(secretariaCriada);
        });
    }
    listSecretaria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const secretariaService = SecretariaService_1.default.getInstance();
            res.json(yield secretariaService.listSecretaria());
        });
    }
    findSecretaria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const secretariaService = SecretariaService_1.default.getInstance();
            const id_secretaria = req.params.id_secretaria;
            res.json(yield secretariaService.findSecretaria(id_secretaria));
        });
    }
    deleteSecretaria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const secretariaService = SecretariaService_1.default.getInstance();
            const id_secretaria = req.params.id_secretaria;
            yield secretariaService.deleteSecretaria(id_secretaria);
            res.json('Funcionario deletada');
        });
    }
    updateSecretaria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const secretariaService = SecretariaService_1.default.getInstance();
            const id_secretaria = req.params.id_secretaria;
            const secretaria = req.body;
            yield secretariaService.updateSecretaria(id_secretaria, secretaria);
            res.json('Secretaria alterada');
        });
    }
}
exports.default = SecretariaController;
