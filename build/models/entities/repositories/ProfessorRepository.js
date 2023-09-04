"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../../config/Database");
const Professor_1 = __importDefault(require("../Professor"));
const ProfessorRepository = Database_1.AppDataSource.getRepository(Professor_1.default);
exports.default = ProfessorRepository;
