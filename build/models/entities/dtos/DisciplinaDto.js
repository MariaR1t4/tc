"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisciplinaSchema = void 0;
const zod_1 = require("zod");
exports.DisciplinaSchema = zod_1.z.object({
    id_disciplina: zod_1.z.string(),
    descricao: zod_1.z.string()
});
