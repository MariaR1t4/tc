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
const SecretariaRepository_1 = __importDefault(require("../models/entities/repositories/SecretariaRepository"));
class SecretariaService {
    constructor() {
    }
    static getInstance() {
        if (!SecretariaService.instance) {
            SecretariaService.instance = new SecretariaService();
        }
        ;
        return SecretariaService.instance;
    }
    criaSecretaria(secretaria) {
        throw new Error('Secretaria não pôde ser criada');
    }
    saveSecretaria(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(obj);
            return yield SecretariaRepository_1.default.save(obj);
        });
    }
    listSecretaria() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SecretariaRepository_1.default.find();
        });
    }
    findSecretaria(id_secretaria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SecretariaRepository_1.default.findOneBy(({ id_secretaria }));
        });
    }
    deleteSecretaria(id_Secretaria) {
        return __awaiter(this, void 0, void 0, function* () {
            yield SecretariaRepository_1.default.delete(id_Secretaria);
        });
    }
    updateSecretaria(id_secretaria, Secretaria) {
        return __awaiter(this, void 0, void 0, function* () {
            const SecretariaAlterada = yield SecretariaRepository_1.default.findOneBy(({ id_secretaria }));
            if (SecretariaAlterada) {
                SecretariaAlterada.nome = Secretaria.nome;
                SecretariaAlterada.email = Secretaria.email;
                SecretariaAlterada.senha = Secretaria.senha;
                yield SecretariaRepository_1.default.save(SecretariaAlterada);
            }
            Promise.resolve();
        });
    }
}
exports.default = SecretariaService;
