import { v4 } from "uuid";
import { Request } from "express";
import fs from 'fs';
import Jimp from 'jimp';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import * as jwt from 'jsonwebtoken';
import csvParser from "csv-parser";


import Aluno from "../../models/entities/Aluno";
import AlunoRepository from "../../models/entities/repositories/AlunoRepository";
import { hide } from "../../auth/constants";
import logger from "../../configs/logger"
class AlunoServiceLogin {

    getAlunoFromData(rm: number, senha: string, telefone:string, nome:string, email:string) : Aluno{
        const newAluno = new Aluno();
        newAluno.rm = rm;
        const hashDigest = sha256(senha);
        logger.debug("HashAntes: ", hashDigest)
        const privateKey = "FIEC2023"
        const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, privateKey ))
        logger.debug("HashDepos: ",hashDigest)
        newAluno.telefone = telefone;
        return newAluno;
    }

    async loginAluno(rm: number, senha: string) : Promise<string>{
        const hashDigest = sha256(senha);
        logger.debug("HashAntes: ", hashDigest)
        const privateKey = "FIEC2023"
        const SenhaHasehd = Base64.stringify(hmacSHA512(hashDigest, privateKey ))
        const foundAluno = await AlunoRepository.findOneBy({ rm,  }); // quando for passar pra SenhaHashed (linha acima ☝️) colocar senha: SenhaHaseh
        if(foundAluno){
        const token = jwt.sign({rm: foundAluno?.rm}, hide, {expiresIn: 300});
        return token;}
        throw new Error("Aluno not found");
    }

    async signUpAluno( rm: number, senha: string, telefone:string, nome:string, email:string){
        const newAluno = this.getAlunoFromData(rm, senha,telefone,nome, email);
        await AlunoRepository.save(newAluno);
    }

    async signUpAlunosInBatch(req: Request){
        const file = req.file;
        const Alunos : Aluno[] = [];
        if(file != null) {
            fs.createReadStream(file.path)
                .pipe(csvParser())
                .on('data', (data) => Alunos.push(this.getAlunoFromData(data.rm, data.senha, data.telefone, data.nome, data.email)))
                .on('end', () => {
                    console.log(Alunos);
                    AlunoRepository.insert(Alunos);
                    
            });
        }
    }

    async updateAlunoImage(req: Request){
        const file = req.file;
        const {rm} = (req as any).authAluno;
        const foundAluno = await AlunoRepository.findOneBy({rm});

        if(file != null && foundAluno != null){
            const image = await Jimp.read(file.path);
            await image.resize(600,600);
            await image.write('uploads/' + file.originalname);
            await AlunoRepository.save(foundAluno);
        }
    }
}

export default AlunoServiceLogin;

