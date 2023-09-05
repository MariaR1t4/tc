import { AppDataSource } from "../../config/Database"
import ProfessorDisciplina  from "../ProfessorDisciplina"


const ProfessorDisciplinaRepository = AppDataSource.getRepository(ProfessorDisciplina)

export default ProfessorDisciplinaRepository