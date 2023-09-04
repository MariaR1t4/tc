"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretariaSchema = void 0;
const zod_1 = require("zod");
exports.SecretariaSchema = zod_1.z.object({
    id_secretaria: zod_1.z.number(),
    nome: zod_1.z.string(),
    email: zod_1.z.string().email(),
    senha: zod_1.z.string().min(8, { message: "insira uma senha de pelo menos 8 caracteres" }),
});
