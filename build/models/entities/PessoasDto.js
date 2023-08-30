"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoasSchema = void 0;
const zod_1 = require("zod");
exports.PessoasSchema = zod_1.z.object({
    id: zod_1.z.number(),
    email: zod_1.z.string(),
    password: zod_1.z.string()
});
