import {AppDataSource} from "../../DataBase"
import Professor from "../Professor"

const ProfessorRepository = AppDataSource.getRepository(Professor)

export default ProfessorRepository