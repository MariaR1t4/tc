import { AppDataSource } from "../../config/Database"
import Turma from "../Turma"


const TurmaRepository = AppDataSource.getRepository(Turma)

export default TurmaRepository