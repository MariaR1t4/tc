"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("../../DataBase");
const Matricula_1 = __importDefault(require("../Matricula"));
const MatriculaRepository = DataBase_1.AppDataSource.getRepository(Matricula_1.default);
exports.default = MatriculaRepository;
