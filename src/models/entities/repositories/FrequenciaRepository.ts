import { AppDataSource } from "../../config/Database"
import Frequencia from "../Frequencia"


const FrequenciaRepository = AppDataSource.getRepository(Frequencia)

export default FrequenciaRepository