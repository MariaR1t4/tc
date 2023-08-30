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
const PessoasService_1 = __importDefault(require("../service/PessoasService"));
class PessoaController {
    constructor() {
    }
    static getInstance() {
        if (!PessoaController.instance) {
            PessoaController.instance = new PessoaController();
        }
        return PessoaController.instance;
    }
    savePessoa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pessoasService = PessoasService_1.default.getInstance();
            const pessoas = req.body;
            const Pessoascriadas = yield pessoasService.savePessoas(pessoas);
            console.log(Pessoascriadas);
            res.json(Pessoascriadas);
        });
    }
    getPessoa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pessoasService = PessoasService_1.default.getInstance();
            res.json(yield pessoasService.getPessoas());
        });
    }
    getPessoaById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pessoasService = PessoasService_1.default.getInstance();
            const id = req.params.id;
            res.json(yield pessoasService.getPessoasById(parseInt(id)));
        });
    }
    // dois arg para Pessoas mas só passa um, id
    deletePessoaById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pessoasService = PessoasService_1.default.getInstance();
            const id = req.params.id;
            yield pessoasService.deletePessoasById(parseInt(id));
            res.json('ok');
        });
    }
    updatePessoaById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pessoasService = PessoasService_1.default.getInstance();
            const id = req.params.id;
            const pessoas = req.body;
            yield pessoasService.updatePessoasById(parseInt(id), pessoas);
            res.json('ok');
        });
    }
}
exports.default = PessoaController;
