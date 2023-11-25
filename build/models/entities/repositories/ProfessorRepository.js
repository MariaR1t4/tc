"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("../../DataBase");
const Professor_1 = __importDefault(require("../Professor"));
const ProfessorRepository = DataBase_1.AppDataSource.getRepository(Professor_1.default);
exports.default = ProfessorRepository;
