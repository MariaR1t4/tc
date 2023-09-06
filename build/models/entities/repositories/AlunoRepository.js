"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("../../DataBase");
const Aluno_1 = __importDefault(require("../Aluno"));
const AlunoRepository = DataBase_1.AppDataSource.getRepository(Aluno_1.default);
exports.default = AlunoRepository;
