"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretariaSchema = void 0;
const zod_1 = require("zod");
exports.SecretariaSchema = zod_1.z.object({
    nome: zod_1.z.string(),
});
