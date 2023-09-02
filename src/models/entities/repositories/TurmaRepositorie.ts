import { AppDataSource } from "../../config/Database"
import Turma from "../Turma"


const TurmaRepositorie = AppDataSource.getRepository(Turma)

export default TurmaRepositorie