import { DataSource } from "typeorm";


import Frequencia from "./entities/Frequencia";
import Turma from "./entities/Turma";
import Professor from "./entities/Professor";
import Aluno from "./entities/Aluno";
import Disciplina from "./entities/Disciplina";
import ProfessorDisciplina from "./entities/ProfessorDisciplina";
import  Matricula  from "./entities/Matricula";
import Usuario from "./entities/Usuario";
import Aula from "./entities/Aula";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "fiectcc.c6hic1eh5cuk.us-east-1.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "Fiec2023",
    database: "alumnus",
    synchronize: true,
    logging: true,
    entities: [Aluno,Aula, Disciplina, Frequencia, Professor, Matricula, ProfessorDisciplina, Turma, Usuario],
    subscribers: [],
    migrations: []
})