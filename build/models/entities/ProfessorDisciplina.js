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
let ProfessorDisciplina = class ProfessorDisciplina {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ProfessorDisciplina.prototype, "professor_disciplina", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Turma_1.default, (turma) => turma.id_turma),
    __metadata("design:type", Number)
], ProfessorDisciplina.prototype, "id_turma", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Disciplina_1.default, (disciplina) => disciplina.id_disciplina),
    (0, typeorm_1.JoinColumn)({ name: 'id_disciplina', referencedColumnName: 'id_disciplina' }),
    __metadata("design:type", Number)
], ProfessorDisciplina.prototype, "id_disciplina", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Professor_1.default, (professor) => professor.id_tabela_professor),
    (0, typeorm_1.JoinColumn)({ name: 'id_tabela_professor', referencedColumnName: 'id_tabela_professor' }),
    __metadata("design:type", Number)
], ProfessorDisciplina.prototype, "id_tabela_professor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ProfessorDisciplina.prototype, "carga_horaria", void 0);
ProfessorDisciplina = __decorate([
    (0, typeorm_1.Entity)()
], ProfessorDisciplina);
exports.default = ProfessorDisciplina;
