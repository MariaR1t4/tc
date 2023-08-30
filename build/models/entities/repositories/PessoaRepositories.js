"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../../config/Database");
const Pessoa_1 = __importDefault(require("../Pessoa"));
const PessoaRepositorie = Database_1.AppDataSource.getRepository(Pessoa_1.default);
exports.default = PessoaRepositorie;
