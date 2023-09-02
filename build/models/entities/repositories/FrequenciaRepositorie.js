"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../../config/Database");
const Frequencia_1 = __importDefault(require("../Frequencia"));
const FrequenciaRepositorie = Database_1.AppDataSource.getRepository(Frequencia_1.default);
exports.default = FrequenciaRepositorie;
