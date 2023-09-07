"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
const DataBase_1 = require("../../DataBase");
const ProfessorDisciplina_1 = __importDefault(require("../ProfessorDisciplina"));
const ProfessorDisciplinaRepository = DataBase_1.AppDataSource.getRepository(ProfessorDisciplina_1.default);
=======
const Database_1 = require("../../config/Database");
const ProfessorDisciplina_1 = __importDefault(require("../ProfessorDisciplina"));
const ProfessorDisciplinaRepository = Database_1.AppDataSource.getRepository(ProfessorDisciplina_1.default);
>>>>>>> 8e71852d88985ae45487ec3c01bac48c82ef3b07
exports.default = ProfessorDisciplinaRepository;
