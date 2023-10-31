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
const Turma_1 = __importDefault(require("./Turma"));
const uuid_1 = require("uuid");
(0, uuid_1.v4)();
let Matricula = class Matricula {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Matricula.prototype, "id_matricula", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Turma_1.default, (turma) => turma.id_turma),
    (0, typeorm_1.JoinColumn)({ name: "id_turma", referencedColumnName: "id_turma" }),
    __metadata("design:type", String)
], Matricula.prototype, "id_turma", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Aluno_1.default, (aluno) => aluno.rm),
    (0, typeorm_1.JoinColumn)({ name: "rm", referencedColumnName: "rm" }),
    __metadata("design:type", Number)
], Matricula.prototype, "rm", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Matricula.prototype, "ano", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Matricula.prototype, "semestre", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Matricula.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Matricula.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Matricula.prototype, "deleted_at", void 0);
Matricula = __decorate([
    (0, typeorm_1.Entity)()
], Matricula);
exports.default = Matricula;
