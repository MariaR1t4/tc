import { AppDataSource } from "../../config/Database"
import Pessoa from "../Pessoa"


const PessoaRepositorie = AppDataSource.getRepository(Pessoa)

export default PessoaRepositorie