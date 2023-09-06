"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("../../DataBase");
const Disciplina_1 = __importDefault(require("../Disciplina"));
const DisciplinaRepository = DataBase_1.AppDataSource.getRepository(Disciplina_1.default);
exports.default = DisciplinaRepository;
