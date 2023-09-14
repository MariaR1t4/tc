import { DataSource } from "typeorm";


import Frequencia from "./entities/Frequencia";
import Turma from "./entities/Turma";
import Professor from "./entities/Professor";
import Aluno from "./entities/Aluno";
import Disciplina from "./entities/Disciplina";
import ProfessorDisciplina from "./entities/ProfessorDisciplina";
import  Matricula  from "./entities/Matricula";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "alumnus",
    synchronize: true,
    logging: true,
    entities: [Aluno, Disciplina, Frequencia, Professor, Matricula, ProfessorDisciplina, Turma],
    subscribers: [],
    migrations: []
})