"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoSchema = void 0;
const zod_1 = require("zod");
exports.AlunoSchema = zod_1.z.object({
    nome: zod_1.z.string(),
    telefone: zod_1.z.string().length(12, { message: "insira apenas números (ex: xx x xxxx xxxx" }),
    email: zod_1.z.string().email(),
    senha: zod_1.z.string().min(8, { message: "insira uma senha de pelo menos 8 caracteres" }),
});
