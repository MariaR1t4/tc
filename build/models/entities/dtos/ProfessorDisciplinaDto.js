"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorDisciplinaSchema = void 0;
const zod_1 = require("zod");
exports.ProfessorDisciplinaSchema = zod_1.z.object({
    id_turma: zod_1.z.string(),
    id_disciplina: zod_1.z.string(),
    id_professor: zod_1.z.string(),
    carga_horaria: zod_1.z.number()
});
