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
const MatriculaService_1 = __importDefault(require("../service/MatriculaService"));
class MatriculaController {
    constructor() { }
    static getInstance() {
        if (!MatriculaController.instance) {
            MatriculaController.instance = new MatriculaController();
        }
        return MatriculaController.instance;
    }
    saveMatricula(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const matriculaService = MatriculaService_1.default.getInstance();
                const matricula = req.body;
                const matriculaCriada = yield matriculaService.saveMatricula(matricula);
                res.json(matriculaCriada);
            }
            catch (err) {
                console.log(err);
                return res.status(400).send({ err: "nao foi possivel criar matrícula" });
            }
        });
    }
    listMatricula(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const matriculaService = MatriculaService_1.default.getInstance();
                res.json(yield matriculaService.listMatricula());
            }
            catch (err) {
                return res.json(400).send({ erro: "Não foi possivel listar matrículas" });
            }
        });
    }
    findMatriculaById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const matriculaService = MatriculaService_1.default.getInstance();
                const id_matricula = req.params.id_matricula;
                if (!id_matricula) {
                    res.status(400).send({ err: "id nao encontrado" });
                }
                res.json(yield matriculaService.findMatriculaById(id_matricula));
            }
            catch (err) {
                console.log(err);
                return res.status(400).send({ err: "nao foi possivel encontrar matrícula" });
            }
        });
    }
    deleteMatricula(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const matriculaService = MatriculaService_1.default.getInstance();
                const id_matricula = req.params.id_matricula;
                yield matriculaService.deleteMatricula(id_matricula);
                res.json("Matrícula deletada");
            }
            catch (err) {
                console.log(err);
                return res.status(400).send({ err: "nao foi possivel encontrar matrícula" });
            }
        });
    }
}
exports.default = MatriculaController;
