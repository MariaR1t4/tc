"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = void 0;
const zod_1 = require("zod");
exports.UsuarioSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    fcmToken: zod_1.z.string(),
    googleId: zod_1.z.string(),
    ImageUrl: zod_1.z.string(),
    tipo: zod_1.z.string()
});
