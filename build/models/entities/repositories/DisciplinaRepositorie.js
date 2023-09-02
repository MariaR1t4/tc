"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../../config/Database");
const Disciplina_1 = __importDefault(require("../Disciplina"));
const DisciplinaRepositorie = Database_1.AppDataSource.getRepository(Disciplina_1.default);
exports.default = DisciplinaRepositorie;
