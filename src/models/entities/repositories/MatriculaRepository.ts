import {AppDataSource} from "../../DataBase"
import Matricula from "../Matricula"


const MatriculaRepository = AppDataSource.getRepository(Matricula)

export default MatriculaRepository