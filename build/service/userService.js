"use strict";
/*import UserRepositorie from "../models/entities/repositories/UserRepository";
import User from "../models/entities/User";


export default class UserService{
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
        return await UserRepositorie.save(obj);
    }
    public async getUsers():Promise<User[]>{
        return await UserRepositorie.find();
    }
    public async getUserById(id:number) : Promise<User | null> {
        return await UserRepositorie.findOneBy({randomNumber: id});
    }
    public async deleteUserById(id:number):Promise<void>{
        await UserRepositorie.delete(id);
    }
    public async updateUserById(id: number, User:User):Promise<void>{
        const UserNow = await UserRepositorie.findOneBy(({randomNumber: id}));
        if(UserNow){
//            UserNow.rm = User.rm;
            UserNow.name = User.name;
            UserNow.email = User.email;
            UserNow.telefone = User.telefone;
            UserNow.password = User.password;
            await UserRepositorie.save(UserNow);
        }
        Promise.resolve();
    }
    
}
 */ 
