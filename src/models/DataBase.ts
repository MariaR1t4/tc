import { DataSource } from "typeorm";


import Frequencia from "./entities/Frequencia";
import Turma from "./entities/Turma";
import User from "./entities/User";
import Professor from "./entities/Professor";
import Aluno from "./entities/Aluno";
import Disciplina from "./entities/Disciplina";
import ProfessorDisciplina from "./entities/ProfessorDisciplina";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "alumnus",
    synchronize: true,
    logging: true,
    entities: [Aluno, Disciplina, Frequencia, Professor, ProfessorDisciplina, Turma, User],
    subscribers: [],
    migrations: []
})