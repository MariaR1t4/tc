"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulaSchema = void 0;
const zod_1 = require("zod");
exports.AulaSchema = zod_1.z.object({
    id_aula: zod_1.z.string(),
    professor_disciplina: zod_1.z.string(),
    descricao: zod_1.z.string(),
});