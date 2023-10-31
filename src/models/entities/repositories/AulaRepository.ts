import {AppDataSource} from "../../DataBase"
import Aula from "../Aula"



const AulaRepository = AppDataSource.getRepository(Aula)

export default AulaRepository