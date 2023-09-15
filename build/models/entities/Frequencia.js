"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Aluno_1 = __importDefault(require("./Aluno"));
const Disciplina_1 = __importDefault(require("./Disciplina"));
const Turma_1 = __importDefault(require("./Turma"));
let Frequencia = class Frequencia {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Frequencia.prototype, "id_frequencia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Frequencia.prototype, "lista_chamada", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Aluno_1.default, (aluno) => aluno.rm),
    (0, typeorm_1.JoinColumn)({ name: 'rm', referencedColumnName: 'rm' }),
    __metadata("design:type", Number)
], Frequencia.prototype, "rm", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Disciplina_1.default, (disciplina) => disciplina.id_disciplina),
    (0, typeorm_1.JoinColumn)({ name: 'id_disciplina', referencedColumnName: 'id_disciplina' }),
    __metadata("design:type", Number)
], Frequencia.prototype, "id_disciplina", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Turma_1.default, (turma) => turma.id_turma),
    (0, typeorm_1.JoinColumn)({ name: 'id_turma', referencedColumnName: 'id_turma' }),
    __metadata("design:type", Number)
], Frequencia.prototype, "id_turma", void 0);
Frequencia = __decorate([
    (0, typeorm_1.Entity)()
], Frequencia);
exports.default = Frequencia;
