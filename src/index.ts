import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from 'cors';


import { AppDataSource } from "./models/DataBase";
import frequenciaRouter from "./router/FrequenciaRouter";
import TurmaRouter from "./router/TurmaRouter";
import alunoRouter from "./router/AlunoRouter";
import disciplinaRouter from "./router/DisciplinaRouter";
import professorDisciplinaRouter from "./router/ProfessorDisciplinaRouter";
import professorRouter from "./router/ProfessorRouter";
import authRouter from "./router/auth/UserAuthRouter";
import { validatorAluno, validatorProfessor } from "./controller/auth/Auth.Validation";

const app = express();
const port = 38000;

app.use(express.json());
app.use(cors());

//app.use(express.static('front'));

app.use(morgan('combined'));

//app.use('/app', express.static(path.join(__dirname, 'src')))

app.use('/api/v1/aluno', alunoRouter);

app.use('/api/v1/aluno', validatorAluno);

app.use('/api/v1/disciplina', disciplinaRouter);

app.use('/api/v1/frequencia', frequenciaRouter);

app.use('/api/v1/disciplina-professor', professorDisciplinaRouter);

app.use('/api/v1/professor', professorRouter);

app.use('/api/v1/professor', validatorProfessor);

app.use('/api/v1/turma', TurmaRouter);

app.use('/api/v1/auth', authRouter);


app.listen(port,()=>{
    console.log(`Servidor iniciado em http://localhost:${port}`);
    AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
});