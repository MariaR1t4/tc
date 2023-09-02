"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../../config/Database");
const TurmaRepositorie = Database_1.AppDataSource.getRepository(Turma);
exports.default = TurmaRepositorie;
