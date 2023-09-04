"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../../config/Database");
const ProfessorDisciplina_1 = require("../ProfessorDisciplina");
const ProfessorDisciplinaRepository = Database_1.AppDataSource.getRepository(ProfessorDisciplina_1.ProfessorDisciplina);
exports.default = ProfessorDisciplinaRepository;
