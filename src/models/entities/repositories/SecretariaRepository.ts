import Secretaria from "../Secretaria"
import { AppDataSource } from "../../config/Database"


const SecretariaRepository = AppDataSource.getRepository(Secretaria)

export default SecretariaRepository