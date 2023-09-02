"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const PessoaRouter_1 = __importDefault(require("./router/PessoaRouter"));
const Database_1 = require("./models/config/Database");
const UsersRouter_1 = __importDefault(require("./router/UsersRouter"));
const FrequenciaRouter_1 = __importDefault(require("./router/FrequenciaRouter"));
const TurmaRouter_1 = __importDefault(require("./router/TurmaRouter"));
const app = (0, express_1.default)();
const port = 3030;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//app.use(express.static('front'));
app.use((0, morgan_1.default)('combined'));
//app.use('/app', express.static(path.join(__dirname, 'src')))
app.use('/app/user/', UsersRouter_1.default);
app.use('/app/pessoa/', PessoaRouter_1.default);
app.use('/app/frequencia/', FrequenciaRouter_1.default);
app.use('/app/turma/', TurmaRouter_1.default);
app.listen(port, () => {
    console.log(`Servidor iniciado em http:/localhost:${port}`);
    Database_1.AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
    console.log('Sucesso');
});
