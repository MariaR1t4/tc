"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Frequencia_1 = __importDefault(require("./entities/Frequencia"));
const Turma_1 = __importDefault(require("./entities/Turma"));
const Professor_1 = __importDefault(require("./entities/Professor"));
const Aluno_1 = __importDefault(require("./entities/Aluno"));
const Disciplina_1 = __importDefault(require("./entities/Disciplina"));
const ProfessorDisciplina_1 = __importDefault(require("./entities/ProfessorDisciplina"));
const Matricula_1 = __importDefault(require("./entities/Matricula"));
const Usuario_1 = __importDefault(require("./entities/Usuario"));
const Aula_1 = __importDefault(require("./entities/Aula"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "alumnus",
    synchronize: true,
    logging: true,
    entities: [Aluno_1.default, Aula_1.default, Disciplina_1.default, Frequencia_1.default, Professor_1.default, Matricula_1.default, ProfessorDisciplina_1.default, Turma_1.default, Usuario_1.default],
    subscribers: [],
    migrations: []
});
