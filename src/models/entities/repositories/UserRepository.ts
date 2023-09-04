import { AppDataSource } from "../../config/Database";
import User from "../User";


const UserRepository = AppDataSource.getRepository(User);
export default UserRepository