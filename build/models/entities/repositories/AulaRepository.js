"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("../../DataBase");
const Aula_1 = __importDefault(require("../Aula"));
const AulaRepository = DataBase_1.AppDataSource.getRepository(Aula_1.default);
exports.default = AulaRepository;
