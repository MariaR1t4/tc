"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrequenciaSchema = void 0;
const zod_1 = require("zod");
exports.FrequenciaSchema = zod_1.z.object({
    id_turma: zod_1.z.number(),
    /*id_professor: z.number(),
    id_disciplina: z.number(),*/
    data: zod_1.z.date().nullable(),
    professorDisciplina: zod_1.z.string(),
    rm: zod_1.z.number()
});
