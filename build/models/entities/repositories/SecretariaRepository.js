"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Secretaria_1 = __importDefault(require("../Secretaria"));
const Database_1 = require("../../config/Database");
const SecretariaRepository = Database_1.AppDataSource.getRepository(Secretaria_1.default);
exports.default = SecretariaRepository;
