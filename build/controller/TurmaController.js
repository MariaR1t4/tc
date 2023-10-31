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
const TurmaService_1 = __importDefault(require("../service/TurmaService"));
class TurmaController {
    constructor() {
    }
    static getInstance() {
        if (!TurmaController.instance) {
            TurmaController.instance = new TurmaController();
        }
        return TurmaController.instance;
    }
    saveTurma(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const turmaService = TurmaService_1.default.getInstance();
            const Turma = req.body;
            const turmacreated = yield turmaService.saveTurma(Turma);
            return res.status(200).send({ Response: "Turma cadastrda 🤠" });
        });
    }
    listTurma(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const turmaService = TurmaService_1.default.getInstance();
            res.json(yield turmaService.listTurma());
        });
    }
    findTurma(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const turmaService = TurmaService_1.default.getInstance();
            const { id_turma } = req.params;
            res.json(yield turmaService.findTurma((id_turma)));
        });
    }
    deleteTurma(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const turmaService = TurmaService_1.default.getInstance();
            const id_turma = req.params.id_turma;
            yield turmaService.deleteTurma((id_turma));
            res.json('Turma deletada');
        });
    }
    updateTurma(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const turmaService = TurmaService_1.default.getInstance();
            const id_turma = req.params.id_turma;
            const Turma = req.body;
            yield turmaService.updateTurma((id_turma), Turma);
            res.json('ok');
        });
    }
}
exports.default = TurmaController;
