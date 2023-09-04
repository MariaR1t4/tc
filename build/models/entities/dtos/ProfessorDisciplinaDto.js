"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorDisciplinaSchema = void 0;
const zod_1 = require("zod");
exports.ProfessorDisciplinaSchema = zod_1.z.object({
    id_professor_disciplina: zod_1.z.number(),
    id_turma: zod_1.z.number(),
    id_disciplina: zod_1.z.number(),
    id_professor: zod_1.z.number(),
    carga_horaria: zod_1.z.date()
});
