import { AppDataSource } from "../../config/Database"
import Aluno from "../Aluno"


const AlunoRepository = AppDataSource.getRepository(Aluno)

export default AlunoRepository