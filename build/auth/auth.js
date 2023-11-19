"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secretariaauth = exports.professorauth = exports.alunoAtuh = void 0;
function alunoAtuh(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.headers.authorization;
        const tipo = req.headers.tipo;
        console.log(token);
        console.log(tipo);
        if (tipo == 'aluno' || tipo == 'Aluno') {
            next();
            return;
        }
        res.status(403);
    });
}
exports.alunoAtuh = alunoAtuh;
function professorauth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.headers.authorization;
        const tipo = req.headers.tipo;
        console.log('token: `${token}`');
        console.log('tipo: `${tipo}');
        if (tipo == 'Professor' || tipo == 'professor') {
            next();
            return;
        }
        res.status(403);
    });
}
exports.professorauth = professorauth;
function secretariaauth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.headers.authorization;
        const tipo = req.headers.tipo;
        console.log('token: `${token}`');
        console.log('tipo: `${tipo}');
        if (tipo == 'Secretaria' || tipo == 'secretaria') {
            next();
            return;
        }
        res.status(403);
    });
}
exports.secretariaauth = secretariaauth;
