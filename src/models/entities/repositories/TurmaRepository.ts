import {AppDataSource} from "../../DataBase"
import Turma from "../Turma"


const TurmaRepository = AppDataSource.getRepository(Turma)

export default TurmaRepository