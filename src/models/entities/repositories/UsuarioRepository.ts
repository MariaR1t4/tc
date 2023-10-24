import {AppDataSource} from "../../DataBase"
import Usuario from "../Usuario"


const UsuarioRepository = AppDataSource.getRepository(Usuario)

export default UsuarioRepository