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
const MatriculaRepository_1 = __importDefault(require("../models/entities/repositories/MatriculaRepository"));
class MatriculaService {
    criaMatricula(matricula) {
        throw new Error('Matricula não cadastrada');
    }
    static getInstance() {
        if (!MatriculaService.instance) {
            MatriculaService.instance = new MatriculaService();
        }
        ;
        return MatriculaService.instance;
    }
    saveMatricula(matricula) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MatriculaRepository_1.default.save(matricula);
        });
    }
    listMatricula() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MatriculaRepository_1.default.find();
        });
    }
    findMatriculaById(id_matricula) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield MatriculaRepository_1.default.findOneBy({ id_matricula });
            if (response == null) {
                return { erro: "id não existente !" };
            }
            return response;
        });
    }
    deleteMatricula(id_matricula) {
        return __awaiter(this, void 0, void 0, function* () {
            yield MatriculaRepository_1.default.delete(id_matricula);
            return { success: "matricula apagada com sucesso" };
        });
    }
}
exports.default = MatriculaService;
