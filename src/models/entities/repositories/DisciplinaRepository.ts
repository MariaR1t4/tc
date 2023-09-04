import { AppDataSource } from "../../config/Database"
import Disciplina from "../Disciplina"


const DisciplinaRepository = AppDataSource.getRepository(Disciplina)

export default DisciplinaRepository