import { AppDataSource } from "../../config/Database"
import Professor from "../Professor"

const ProfessorRepository = AppDataSource.getRepository(Professor)

export default ProfessorRepository