"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matricula = void 0;
const zod_1 = require("zod");
exports.Matricula = zod_1.z.object({
    id_matricula: zod_1.z.number(),
    rm: zod_1.z.number(),
    id_turma: zod_1.z.number(),
    semestre: zod_1.z.number(),
    ano: zod_1.z.string().length(4, { message: 'insira o ano com 4 dígitos - AAAA' })
});
