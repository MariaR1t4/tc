"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("../../../DataBase");
const Frequencia_1 = __importDefault(require("../../Frequencia"));
const FrequenciaRepository = DataBase_1.AppDataSource.getRepository(Frequencia_1.default);
exports.default = FrequenciaRepository;
