import {DataSource} from "typeorm";
import Frequencia from "../entities/Frequencia";
import Pessoa from "../entities/Pessoa";
import Turma from "../entities/Turma";
import User from "../entities/User";

export const AppDataSource = new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username: "root",
    password:"1234",
    database: "alumnus",
    synchronize: true,
    logging:true,
    entities:[User, Pessoa, Frequencia, Turma],
    subscribers:[],
    migrations:[]
})