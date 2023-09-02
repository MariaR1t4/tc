"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../../config/Database");
const Turma_1 = __importDefault(require("../Turma"));
const TurmaRepositorie = Database_1.AppDataSource.getRepository(Turma_1.default);
exports.default = TurmaRepositorie;
