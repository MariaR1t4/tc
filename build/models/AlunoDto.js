"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    RandomNumber: zod_1.z.number(),
    rm: zod_1.z.number(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    telefone: zod_1.z.string()
});
