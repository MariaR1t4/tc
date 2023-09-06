"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("../../../DataBase");
const ProfessorDisciplina_1 = __importDefault(require("../../ProfessorDisciplina"));
const ProfessorDisciplinaRepository = DataBase_1.AppDataSource.getRepository(ProfessorDisciplina_1.default);
exports.default = ProfessorDisciplinaRepository;
