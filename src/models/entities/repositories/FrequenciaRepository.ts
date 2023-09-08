import {AppDataSource} from "../../DataBase"
import Frequencia from "../Frequencia"


const FrequenciaRepository = AppDataSource.getRepository(Frequencia)

export default FrequenciaRepository