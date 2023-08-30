import { AppDataSource } from "../../config/Database";
import User from "../User";


const UserRepositorie = AppDataSource.getRepository(User);
    export default UserRepositorie