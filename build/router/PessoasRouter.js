"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PessoasController_1 = __importDefault(require("../controller/PessoasController"));
const pessoasRouter = (0, express_1.Router)();
pessoasRouter.post('/', PessoasController_1.default.getInstance().savePessoas);
pessoasRouter.get('/', PessoasController_1.default.getInstance().getPessoas);
pessoasRouter.get('/:id', PessoasController_1.default.getInstance().getPessoasById);
pessoasRouter.delete('/:id', PessoasController_1.default.getInstance().deletePessoasById);
pessoasRouter.put('/:id', PessoasController_1.default.getInstance().updatePessoasById);
exports.default = pessoasRouter;
