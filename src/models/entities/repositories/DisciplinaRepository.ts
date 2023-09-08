import {AppDataSource} from "../../DataBase"
import Disciplina from "../Disciplina"


const DisciplinaRepository = AppDataSource.getRepository(Disciplina)

export default DisciplinaRepository