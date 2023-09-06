
import { AppDataSource } from "../../../DataBase"
import Secretaria from "../../Secretaria"


const SecretariaRepository = AppDataSource.getRepository(Secretaria)

export default SecretariaRepository