import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from 'cors';
import alunoRouter from "./router/AlunoRouter";
import disciplinaRouter from "./router/DisciplinaRouter";
import professorDisciplinaRouter from "./router/ProfessorDisciplinaRouter";
import professorRouter from "./router/ProfessorRouter";
import usuarioRouter from "./router/UsuarioRouter";
import { AppDataSource } from "./models/DataBase";
import turmaRouter from "./router/TurmaRouter";
import frequenciaRouter from "./router/FrequenciaRouter";
import aulaRouter from "./router/AulaRouter";
import google_login from "./router/auth/login_google";
import fire from "./router/auth/firebase";
import { validatorAluno, validatorProfessor, validatorSecretaria } from "./auth/validator";


const app = express();
const port = 38000;

app.use(express.json());
app.use(cors());

//app.use(express.static('front'));

app.use(morgan('combined'));

//app.use('/app', express.static(path.join(__dirname, 'src')))

app.use('/api/v1/secretaria/aluno', validatorSecretaria,alunoRouter  );

app.use('/api/v1/aluno/frequencia', validatorAluno , frequenciaRouter, );

app.use('/api/v1/professor/aula', validatorProfessor,aulaRouter );

app.use('/api/v1/secretaria/disciplina',validatorSecretaria, disciplinaRouter,  );

app.use('/api/v1/frequencia',validatorProfessor, frequenciaRouter, );

app.use('/api/v1/secretaria/prof-disciplina', validatorSecretaria,professorDisciplinaRouter, );

app.use('/api/v1/secretaria/professor',validatorSecretaria, professorRouter, );

app.use('/api/v1/secretaria/turma', validatorSecretaria,turmaRouter, )

app.use('/api/v1', usuarioRouter)

app.use('/api/v1', google_login)

app.use('/api/v1', fire)

app.listen(port,()=>{
    console.log(`Servidor iniciado em http://localhost:${port}`);
    AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
});