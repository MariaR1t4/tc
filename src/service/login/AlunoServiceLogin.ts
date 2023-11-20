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
import logger from "../../configs/logger"
import Usuario from "../../models/entities/Usuario";
class AlunoServiceLogin {

    getAlunoFromData(rm: number,  nome:string, telefone:string, email:Usuario) : Aluno{
        const newAluno = new Aluno();
        newAluno.rm = rm;
        newAluno.nome = nome;
        newAluno.usuario = email;
        newAluno.telefone = telefone;
        return newAluno;
    }

    /*async loginAluno(rm: number, senha: string) : Promise<string>{
        const hashDigest = sha256(senha);
        logger.debug("HashAntes: ", hashDigest)
        const privateKey = "FIEC2023"
        const SenhaHasehd = Base64.stringify(hmacSHA512(hashDigest, privateKey ))
        const foundAluno = await AlunoRepository.findOneBy({ rm }); // quando for passar pra SenhaHashed (linha acima ☝️) colocar senha: SenhaHaseh
        if(foundAluno){
        const token = jwt.sign({rm: foundAluno?.rm}, 'sua_senha', {expiresIn: 300});
        return token;}
        throw new Error("Aluno not found");
    }*/

    /*async signUpAluno( rm: number, senha: string, telefone:string, nome:string, email:string){
        const newAluno = this.getAlunoFromData(rm, senha,telefone,nome, email);
        await AlunoRepository.save(newAluno);
    }*/

    async signUpAlunosInBatch(req: Request){
        const file = req.file;
        const Alunos : Aluno[] = [];
        
        if (file !== null) {
            try {
              const parsedData = await parseCsv(fs.createReadStream(file.path));
              parsedData.forEach((data) => Alunos.push(this.getAlunoFromData(data.rm, data.nome, data.usuario, data.telefone)));
              console.log(Alunos);
              await AlunoRepository.insert(Alunos);
            } catch (error) {
              console.error('Erro ao analisar o CSV:', error);
            }
          }
                

    }

    /*async updateAlunoImage(req: Request){
        const file = req.file;
        const {rm} = (req as any).authAluno;
        const foundAluno = await AlunoRepository.findOneBy({rm});

        if(file != null && foundAluno != null){
            const image = await Jimp.read(file.path);
            await image.resize(600,600);
            await image.write('uploads/' + file.originalname);
            await AlunoRepository.save(foundAluno);
        }
    }*/
}

export default AlunoServiceLogin;

