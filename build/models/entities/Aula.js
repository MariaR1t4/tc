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
const ProfessorDisciplina_1 = __importDefault(require("./ProfessorDisciplina"));
let Aula = class Aula {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar' }),
    __metadata("design:type", String)
], Aula.prototype, "id_aula", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProfessorDisciplina_1.default, (profDisciplina) => profDisciplina.professor_disciplina),
    (0, typeorm_1.JoinColumn)({ name: "professor_disciplina", referencedColumnName: "professor_disciplina" }),
    __metadata("design:type", String)
], Aula.prototype, "professor_disciplina", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'descricao' }),
    __metadata("design:type", String)
], Aula.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Aula.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Aula.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Aula.prototype, "deleted_at", void 0);
Aula = __decorate([
    (0, typeorm_1.Entity)()
], Aula);
exports.default = Aula;
