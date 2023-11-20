import { v4 } from "uuid";
import { Request } from "express";
import fs from 'fs';
import Jimp from 'jimp';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import * as jwt from 'jsonwebtoken';
import csvParser from "csv-parser";


import logger from "../../configs/logger"
import Professor from "../../models/entities/Professor";
import ProfessorRepository from "../../models/entities/repositories/ProfessorRepository";
import Usuario from "../../models/entities/Usuario";

class ProfessorServiceLogin {

    getProfessorFromData(usuario: Usuario ,nome:string, telefone:string) : Professor{
        const newProf = new Professor();
        newProf.nome = nome;
        newProf.usuario = usuario;
        newProf.telefone = telefone;
        return newProf;
    }

    async loginProf(usuario: Usuario, senha: string ) : Promise<string>{
        const hashDigest = sha256(senha);
        logger.debug("HashAntes: ", hashDigest)
        const privateKey = "FIEC2023"
        const SenhaHasehd = Base64.stringify(hmacSHA512(hashDigest, privateKey ))
        const foundProf = await ProfessorRepository.findOneBy({ usuario}); // quando for passar pra SenhaHashed (linha acima ☝️) colocar senha: SenhaHaseh
        if(foundProf){
        const token = jwt.sign({email: foundProf?.usuario, }, 'sua_senha', {expiresIn: 300});
        return token;}
        throw new Error("Professor not found");
    }

    async signUpProf(usuario: Usuario, name:string, telefone:string){
        const newProf = this.getProfessorFromData(usuario,name,telefone);
        await ProfessorRepository.save(newProf);
    }

    async signUpProfessorInBatch(req: Request){
        const file = req.file;
        const Professor : Professor[] = [];
        if(file != null) {
            fs.createReadStream(file.path)
                .pipe(csvParser({separator: ';'}))
                .on('data', (data) => Professor.push(this.getProfessorFromData(data.nome, data.telefone, data.usuario)))
                .on('end', () => {
                    console.log(Professor);
                    ProfessorRepository.save(Professor);
                    
            });
        }
    }

}

export default ProfessorServiceLogin;
