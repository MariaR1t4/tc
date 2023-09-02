import { AppDataSource } from "../../config/Database"
import Frequencia from "../Frequencia"


const FrequenciaRepositorie = AppDataSource.getRepository(Frequencia)

export default FrequenciaRepositorie