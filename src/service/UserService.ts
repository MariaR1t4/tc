import User from "../models/entities/User";
import UserRepository from "../models/entities/repositories/UserRepository";


export default class UserService{
    listUser(): any {
        throw new Error("Method not implemented.");
    }
    private constructor(){

    }
    criaPessoas(user: User[]) {
        throw new Error('User was not implemented');
    }
    private static instance: UserService;
    //create a new instance
    public static getInstance(){
        if(!UserService.instance){
            UserService.instance = new UserService();
        };
        return UserService.instance;
    }
    //save a instance
    public async saveUser(obj: User):Promise<User>{
        return await UserRepository.save(obj);
    }
    public async getUsers():Promise<User[]>{
        return await UserRepository.find();
    }
    public async getUserById(randomNumber:number) : Promise<User | null> {
        return await UserRepository.findOneBy({randomNumber});
    }
    public async deleteUserById(id:number):Promise<void>{
        await UserRepository.delete(id);
    }
    public async updateUserById(randomNumber: number, User:User):Promise<void>{
        const UserNow = await UserRepository.findOneBy(({randomNumber}));
        if(UserNow){
//            UserNow.rm = User.rm;
            UserNow.email = User.email;
            UserNow.password = User.password;
            await UserRepository.save(UserNow);
        }
        Promise.resolve();
    }
}  

