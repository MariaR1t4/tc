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
const PessoaRepositories_1 = __importDefault(require("../models/entities/repositories/PessoaRepositories"));
class PessoaService {
    constructor() {
    }
    criaPessoas(pessoas) {
        throw new Error('Method not implemented.');
    }
    //create a new instance
    static getInstance() {
        if (!PessoaService.instance) {
            PessoaService.instance = new PessoaService();
        }
        ;
        return PessoaService.instance;
    }
    //save a instance
    savePessoas(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PessoaRepositories_1.default.save(obj);
        });
    }
    getPessoas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PessoaRepositories_1.default.find();
        });
    }
    deletePessoasById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PessoaRepositories_1.default.delete(id);
        });
    }
    getPessoasById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const PessoasNow = yield PessoaRepositories_1.default.findOneBy({ id });
            if (PessoasNow) {
                return Promise.resolve(PessoasNow);
            }
            return Promise.reject();
        });
    }
    updatePessoasById(id, pessoas) {
        return __awaiter(this, void 0, void 0, function* () {
            const PessoasNow = yield PessoaRepositories_1.default.findOneBy({ id: id });
            if (PessoasNow) {
                PessoasNow.email = pessoas.email;
                PessoasNow.password = pessoas.password;
                yield PessoaRepositories_1.default.save(PessoasNow);
            }
        });
    }
}
exports.default = PessoaService;
