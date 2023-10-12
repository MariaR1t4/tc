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
const Professor_1 = __importDefault(require("./Professor"));
const Turma_1 = __importDefault(require("./Turma"));
let Aula = class Aula {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Aula.prototype, "id_aula", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Professor_1.default, (professor) => professor.id_professor),
    (0, typeorm_1.JoinColumn)({ name: 'id_professor', referencedColumnName: 'id_professor' }),
    __metadata("design:type", Number)
], Aula.prototype, "id_professor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Aluno_1.default, (aluno) => aluno.rm),
    (0, typeorm_1.JoinColumn)({ name: 'rm', referencedColumnName: 'rm' }),
    __metadata("design:type", Number)
], Aula.prototype, "rm", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Disciplina_1.default, (disciplina) => disciplina.id_disciplina),
    (0, typeorm_1.JoinColumn)({ name: 'id_disciplina', referencedColumnName: 'id_disciplina' }),
    __metadata("design:type", Number)
], Aula.prototype, "id_disciplina", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Turma_1.default, (turma) => turma.id_turma),
    (0, typeorm_1.JoinColumn)({ name: 'id_turma', referencedColumnName: 'id_turma' }),
    __metadata("design:type", Number)
], Aula.prototype, "id_turma", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Aula.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Aula.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Aula.prototype, "token_aluno", void 0);
Aula = __decorate([
    (0, typeorm_1.Entity)()
], Aula);
exports.default = Aula;
