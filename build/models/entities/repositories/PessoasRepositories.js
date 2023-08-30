"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../../config/Database");
const Pessoas_1 = __importDefault(require("../Pessoas"));
const PessoasRepositorie = Database_1.AppDataSource.getRepository(Pessoas_1.default);
exports.default = PessoasRepositorie;
