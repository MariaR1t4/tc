"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorSchema = void 0;
const zod_1 = require("zod");
exports.ProfessorSchema = zod_1.z.object({
    name: zod_1.z.string(),
    telefone: zod_1.z.string().length(12, { message: "insira apenas números (ex: xx x xxxx xxxx" }),
    email: zod_1.z.string().email(),
});
