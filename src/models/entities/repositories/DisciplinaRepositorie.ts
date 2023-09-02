import { AppDataSource } from "../../config/Database"
import Disciplina from "../Disciplina"


const DisciplinaRepositorie = AppDataSource.getRepository(Disciplina)

export default DisciplinaRepositorie