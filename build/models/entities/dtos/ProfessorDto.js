"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorSchema = void 0;
const zod_1 = require("zod");
exports.ProfessorSchema = zod_1.z.object({
    id_professor: zod_1.z.string(),
    nome: zod_1.z.string(),
    telefone: zod_1.z.string().length(12, { message: "insira apenas números (ex: xx x xxxx xxxx" }),
    //senha: z.string().min(8, {message: "insira uma senha de pelo menos 8 caracteres"})
});
