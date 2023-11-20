import csv from "csv-parser";
import fs from 'fs';
import {Request} from 'express';
import Aluno from "../models/entities/Aluno";
import AlunoRepository from "../models/entities/repositories/AlunoRepository";
import Usuario from "../models/entities/Usuario";
import csvParser from "csv-parser";

export default class AlunoService{
    private constructor(){

    }

    getAlunoFromData(rm: number,  nome:string, telefone:string, usuario:Usuario) : Aluno{
        const newAluno = new Aluno();
        newAluno.rm = rm;
        newAluno.nome = nome;
        newAluno.telefone = telefone;
        newAluno.usuario = usuario;
        return newAluno;
    }

    criaAluno(aluno: Aluno[]) {
        throw new Error('Aluno não foi criado');
    }
    private static instance: AlunoService;
    public static getInstance(){
        if(!AlunoService.instance){
            AlunoService.instance = new AlunoService();
        };
        return AlunoService.instance;
    }
    public async saveAluno(obj: Aluno):Promise<Aluno>{
        return await AlunoRepository.save(obj);
    }
    public async listAluno():Promise<Aluno[]>{
        return await AlunoRepository.find();
    }
    public async findAlunoById(rm:number) : Promise<Aluno | any> {
        const response =  await AlunoRepository.findOneBy({rm}); 
        if(response == null){
            return {erro:"id não existente !"}
        }        
        return response
    }
    public async deleteAluno(rm:number):Promise<void>{
        await AlunoRepository.delete(rm);
    }
    public async updateAluno(rm:number,aluno:Aluno):Promise<void>{
        const alunoAlterado = await AlunoRepository.findOneBy(({rm}));
        if(alunoAlterado){
            alunoAlterado.telefone = aluno.telefone;
            await AlunoRepository.save(alunoAlterado);
        }
        Promise.resolve();
    }

    async cadastraBatchAluno(req: Request) {
        const file = req.file;
        const aluno: Aluno[] = [];
        if (file != null) {
          fs.createReadStream(file.path)
            .pipe(csvParser({separator : ';'}))
            .on("data", (data) =>
              aluno.push(this.getAlunoFromData(data.rm, data.nome, data.telefone, data.usuario))
              )
              .on("end", () => {
                console.log(aluno)
                AlunoRepository.save(aluno);
            })
        }
      }
    
}
