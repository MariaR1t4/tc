"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("../../DataBase");
const Usuario_1 = __importDefault(require("../Usuario"));
const UsuarioRepository = DataBase_1.AppDataSource.getRepository(Usuario_1.default);
exports.default = UsuarioRepository;
