import csvParser from "csv-parser";
import fs from "fs";
import { Request, Response } from "express";
import Professor from "../models/entities/Professor";
import ProfessorRepository from "../models/entities/repositories/ProfessorRepository";
import Usuario from "../models/entities/Usuario";
import { stringify } from "crypto-js/enc-base64";


export default class ProfessorService{
    private constructor(){

    }


    criaProfessor(professor: Professor[]) {
        throw new Error('Professor não foi criado');
    }
    private static instance: ProfessorService;
    public static getInstance(){
        if(!ProfessorService.instance){
            ProfessorService.instance = new ProfessorService();
        };
        return ProfessorService.instance;
    }

    getProfData(nome: string, telefone: string, usuario:Usuario): Professor {
        const newProf = new Professor();
        newProf.nome = nome;
        newProf.telefone = telefone;
        newProf.usuario = usuario;
        return newProf;
      }

    public async saveProfessor(obj: Professor):Promise<Professor>{
        return await ProfessorRepository.save(obj);
    }
    async listProfessor():Promise<Professor[]>{
        return await ProfessorRepository.find();
    }
    public async findProfessor(id_professor:string) : Promise<Professor | null> {
        return await ProfessorRepository.findOneBy({id_professor}); 
    }
    public async deleteProfessor(id_professor:string):Promise<void>{
        await ProfessorRepository.delete(id_professor);
    }
    public async updateProfessor(id_professor: string, professor:Professor):Promise<void>{
        const professorAlterado = await ProfessorRepository.findOneBy(({id_professor}));
        if(professorAlterado){
            professorAlterado.nome = professor.nome;
            professorAlterado.telefone = professor.telefone;
            professorAlterado.usuario = professor.usuario;
            await ProfessorRepository.save(professorAlterado);
        }
        Promise.resolve();
    }
    
    async cadastraBatchProfessor(req: Request) {
        const file = req.file;
        const professor: Professor[] = [];
        if (file != null) {
          fs.createReadStream(file.path)
            .pipe(csvParser({separator : ';'}))
            .on("data", (data) =>
              professor.push(this.getProfData(data.nome, data.telefone, data.usuario))         
              )
              .on("end", () => {
                try {
                    for (const row of professor) {
                      let nome: string | undefined;
                        if ('nome' in row) {
                        nome = row['nome'];
                        
                        
                      }
                    }                    
                console.log(professor)
                ProfessorRepository.insert(professor);
            }finally{

            }
        })
        }
      }
}
