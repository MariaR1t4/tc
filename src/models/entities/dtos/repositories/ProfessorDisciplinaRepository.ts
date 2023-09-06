import {AppDataSource} from "../../../DataBase"
import ProfessorDisciplina from "../../ProfessorDisciplina"


const ProfessorDisciplinaRepository = AppDataSource.getRepository(ProfessorDisciplina)

export default ProfessorDisciplinaRepository