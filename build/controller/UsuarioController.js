"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioController {
    constructor() {
    }
    static getInstance() {
        if (!UsuarioController.instance) {
            UsuarioController.instance = new UsuarioController();
        }
        return UsuarioController.instance;
    }
}
exports.default = UsuarioController;
