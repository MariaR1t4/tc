"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const DataBase_1 = require("./models/DataBase");
const TurmaRouter_1 = __importDefault(require("./router/TurmaRouter"));
const AlunoRouter_1 = __importStar(require("./router/AlunoRouter"));
const DisciplinaRouter_1 = __importDefault(require("./router/DisciplinaRouter"));
const ProfessorDisciplinaRouter_1 = __importDefault(require("./router/ProfessorDisciplinaRouter"));
const ProfessorRouter_1 = __importDefault(require("./router/ProfessorRouter"));
const UserAuthRouter_1 = __importDefault(require("./router/auth/UserAuthRouter"));
const Auth_Validation_1 = require("./controller/auth/Auth.Validation");
const app = (0, express_1.default)();
const port = 38000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//app.use(express.static('front'));
app.use((0, morgan_1.default)('combined'));
//app.use('/app', express.static(path.join(__dirname, 'src')))
app.use('/api/v1/aluno', AlunoRouter_1.default);
app.use('/api/v1/aluno', Auth_Validation_1.validatorAluno);
app.use('/api/v1/disciplina', DisciplinaRouter_1.default);
app.use('/api/v1/frequencia', AlunoRouter_1.frequenciaRouter);
app.use('/api/v1/disciplina-professor', ProfessorDisciplinaRouter_1.default);
app.use('/api/v1/professor', ProfessorRouter_1.default);
app.use('/api/v1/professor', Auth_Validation_1.validatorProfessor);
app.use('/api/v1/turma', TurmaRouter_1.default);
app.use('/api/v1/auth', UserAuthRouter_1.default);
app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
    DataBase_1.AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
});
