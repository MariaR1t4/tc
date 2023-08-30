import { AppDataSource } from "../../config/Database"
import Frequencia from "../Frequencia"


const PessoaRepositorie = AppDataSource.getRepository(Frequencia)

export default PessoaRepositorie