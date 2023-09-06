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

const app = express();
const port = 38000

app.use(express.json());

app.use(cors());

//app.use(express.static('front'));

app.use(morgan('combined'));

//app.use('/app', express.static(path.join(__dirname, 'src')))


app.use('/app/frequencia/', alunoRouter);

app.use('/app/turma/', disciplinaRouter);

app.use('/app/frequencia/', frequenciaRouter);

app.use('/app/disciplina-professor/', professorDisciplinaRouter);

app.use('/app/professor/', professorRouter);

app.use('/app/turma/', TurmaRouter);






app.listen(port,()=>{
    console.log(`Servidor iniciado em http:/localhost:${port}`);
    AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
    console.log('Sucesso')
});