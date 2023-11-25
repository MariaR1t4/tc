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
const typeorm_1 = require("typeorm");
const Turma_1 = __importDefault(require("./Turma"));
const Disciplina_1 = __importDefault(require("./Disciplina"));
const Professor_1 = __importDefault(require("./Professor"));
const uuid_1 = require("uuid");
(0, uuid_1.v4)();
let ProfessorDisciplina = class ProfessorDisciplina {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ProfessorDisciplina.prototype, "professor_disciplina", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProfessorDisciplina.prototype, "carga_horaria", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Disciplina_1.default, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Disciplina_1.default)
], ProfessorDisciplina.prototype, "id_disciplina", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Turma_1.default, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Turma_1.default)
], ProfessorDisciplina.prototype, "id_turma", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Professor_1.default, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Professor_1.default)
], ProfessorDisciplina.prototype, "id_professor", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProfessorDisciplina.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProfessorDisciplina.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ProfessorDisciplina.prototype, "deleted_at", void 0);
ProfessorDisciplina = __decorate([
    (0, typeorm_1.Entity)()
], ProfessorDisciplina);
exports.default = ProfessorDisciplina;
