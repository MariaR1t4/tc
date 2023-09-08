"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrequenciaSchema = void 0;
const zod_1 = require("zod");
exports.FrequenciaSchema = zod_1.z.object({
    lista_chamada: zod_1.z.number(),
    id_turma: zod_1.z.number(),
    rm: zod_1.z.number(),
    frequencia: zod_1.z.number(),
});
