import {AppDataSource} from "../../../DataBase"
import Aluno from "../../Aluno"


const AlunoRepository = AppDataSource.getRepository(Aluno)

export default AlunoRepository