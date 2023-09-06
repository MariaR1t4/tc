import { v4 } from "uuid";
import { Request } from "express";
import fs from 'fs';
import Jimp from 'jimp';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import * as jwt from 'jsonwebtoken';
import csvParser from "csv-parser";
import User from "../models/entities/User";
import logger from "../models/config/logger";
import UserRepository from "../models/entities/dtos/repositories/UserRepository";
import { SECRET } from "../auth/constants";

class UserServiceLogin {

    getUserFromData(name: string, email: string, password: string) : User{
        const newUser = new User();
        newUser.email = email;
        newUser.password = password;
        const hashDigest = sha256(password);
        logger.debug("HashAntes: ", hashDigest)
        const privateKey = "FIEC2023"
        const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, privateKey ))
        logger.debug("HashDepos: ",hashDigest)
        newUser.password = hmacDigest;
        return newUser;
    }

    async loginUser(email: string, password: string) : Promise<string>{
        const hashDigest = sha256(password);
        logger.debug("HashAntes: ", hashDigest)
        const privateKey = "FIEC2023"
        const passwordHasehd = Base64.stringify(hmacSHA512(hashDigest, privateKey ))
        const foundUser = await UserRepository.findOneBy({ email, password : passwordHasehd});
        if(foundUser){
        const token = jwt.sign({email: foundUser?.email, id: foundUser?.randomNumber}, SECRET, {expiresIn: 300});
        return token;}
        throw new Error("User not found");
    }

    async signUpUser(name: string, email: string, password: string){
        const newUser = this.getUserFromData(name, email, password);
        await UserRepository.save(newUser);
    }

    async signUpUsersInBatch(req: Request){
        const file = req.file;
        const users : User[] = [];
        if(file != null) {
            fs.createReadStream(file.path)
                .pipe(csvParser())
                .on('data', (data) => users.push(this.getUserFromData(data.randomNumber, data.email, data.password)))
                .on('end', () => {
                    console.log(users);
                    UserRepository.insert(users);
                    
            });
        }
    }

    async updateUserImage(req: Request){
        const file = req.file;
        const ImageUrl = req.params.ImageUrl;
        const foundUser = await UserRepository.findOneBy({ImageUrl});
        if(file != null && foundUser != null){
            const image = await Jimp.read(file.path);
            await image.resize(600,600);
            await image.write('uploads/' + file.originalname);
            foundUser.ImageUrl = file.originalname;
            await UserRepository.save(foundUser);
        }
    }
    //1b9f4cee-d5bb-4b09-851f-171595544fb6

}

export default UserServiceLogin;
