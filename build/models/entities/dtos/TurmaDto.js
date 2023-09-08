"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurmaSchema = void 0;
const zod_1 = require("zod");
exports.TurmaSchema = zod_1.z.object({
    curso: zod_1.z.string(),
    periodo: zod_1.z.string(),
    modulo: zod_1.z.string(),
    descricao: zod_1.z.string(),
});
