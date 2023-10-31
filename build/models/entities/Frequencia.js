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
const uuid_1 = require("uuid");
const Aula_1 = __importDefault(require("./Aula"));
const ProfessorDisciplina_1 = __importDefault(require("./ProfessorDisciplina"));
(0, uuid_1.v4)();
let Frequencia = class Frequencia {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Frequencia.prototype, "id_frequencia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Aula_1.default, (aula) => aula.id_aula),
    (0, typeorm_1.JoinColumn)({ name: "id_aula", referencedColumnName: "id_aula" }),
    __metadata("design:type", String)
], Frequencia.prototype, "id_aula", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProfessorDisciplina_1.default, (profDisciplina) => profDisciplina.professor_disciplina),
    (0, typeorm_1.JoinColumn)({ name: "professor_disciplina", referencedColumnName: "professor_disciplina" }),
    __metadata("design:type", String)
], Frequencia.prototype, "professor_disciplina", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Aluno_1.default, (aluno) => aluno.rm),
    (0, typeorm_1.JoinColumn)({ name: "rm", referencedColumnName: "rm" }),
    __metadata("design:type", Number)
], Frequencia.prototype, "rm", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Frequencia.prototype, "qtd_frequencia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Frequencia.prototype, "data_frequencia", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Frequencia.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Frequencia.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Frequencia.prototype, "deleted_at", void 0);
Frequencia = __decorate([
    (0, typeorm_1.Entity)()
], Frequencia);
exports.default = Frequencia;
