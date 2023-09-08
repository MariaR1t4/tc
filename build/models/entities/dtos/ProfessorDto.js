"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorSchema = void 0;
const zod_1 = require("zod");
exports.ProfessorSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8, { message: "insira uma senha de pelo menos 8 caracteres" }),
    telefone: zod_1.z.string().length(12, { message: "insira apenas números (ex: xx x xxxx xxxx" })
});
