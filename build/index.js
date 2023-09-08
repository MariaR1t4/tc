"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const DataBase_1 = require("./models/DataBase");
const FrequenciaRouter_1 = __importDefault(require("./router/FrequenciaRouter"));
const TurmaRouter_1 = __importDefault(require("./router/TurmaRouter"));
const AlunoRouter_1 = __importDefault(require("./router/AlunoRouter"));
const DisciplinaRouter_1 = __importDefault(require("./router/DisciplinaRouter"));
const ProfessorDisciplinaRouter_1 = __importDefault(require("./router/ProfessorDisciplinaRouter"));
const ProfessorRouter_1 = __importDefault(require("./router/ProfessorRouter"));
const express_2 = require("express");
const app = (0, express_1.default)();
const port = 38000;
const authRouter = (0, express_2.Router)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//app.use(express.static('front'));
app.use((0, morgan_1.default)('combined'));
//app.use('/app', express.static(path.join(__dirname, 'src')))
app.use('/app/aluno', AlunoRouter_1.default);
app.use('/app/disciplina', DisciplinaRouter_1.default);
app.use('/app/frequencia', FrequenciaRouter_1.default);
app.use('/app/disciplina-professor', ProfessorDisciplinaRouter_1.default);
app.use('/app/professor', ProfessorRouter_1.default);
app.use('/app/turma', TurmaRouter_1.default);
app.use('/auth', authRouter);
app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
    DataBase_1.AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
});
