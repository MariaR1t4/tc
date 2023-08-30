"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaSchema = void 0;
const zod_1 = require("zod");
exports.PessoaSchema = zod_1.z.object({
    id: zod_1.z.number(),
    email: zod_1.z.string(),
    password: zod_1.z.string()
});
