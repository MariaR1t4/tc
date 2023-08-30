"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PessoasController_1 = __importDefault(require("../controller/PessoasController"));
const pessoaRouter = (0, express_1.Router)();
pessoaRouter.post('/', PessoasController_1.default.getInstance().savePessoa);
pessoaRouter.get('/', PessoasController_1.default.getInstance().getPessoa);
pessoaRouter.get('/:id', PessoasController_1.default.getInstance().getPessoaById);
pessoaRouter.delete('/:id', PessoasController_1.default.getInstance().deletePessoaById);
pessoaRouter.put('/:id', PessoasController_1.default.getInstance().updatePessoaById);
exports.default = pessoaRouter;
