import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from 'cors';
import pessoaRouter from "./router/PessoaRouter";
import { AppDataSource } from "./models/config/Database";
import UserRouter from "./router/UsersRouter";
import frequenciaRouter from "./router/FrequenciaRouter";
import TurmaRouter from "./router/TurmaRouter";

const app = express();
const port = 3030

app.use(express.json());

app.use(cors());

//app.use(express.static('front'));

app.use(morgan('combined'));

//app.use('/app', express.static(path.join(__dirname, 'src')))
app.use('/app/user/', UserRouter);

app.use('/app/pessoa/', pessoaRouter);

app.use('/app/frequencia/', frequenciaRouter);


app.use('/app/turma/', TurmaRouter);



app.listen(port,()=>{
    console.log(`Servidor iniciado em http:/localhost:${port}`);
    AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
    console.log('Sucesso')
});