import Matricula from "../models/entities/Matricula";
import MatriculaRepository from "../models/entities/repositories/MatriculaRepository";

export default class MatriculaService{
    criaMatricula(matricula:Matricula[]) {
        throw new Error('Matricula não cadastrada');
    }
    private static instance: MatriculaService;
    public static getInstance(){
        if(!MatriculaService.instance){
            MatriculaService.instance = new MatriculaService();
        };
        return MatriculaService.instance;
    }
    public async saveMatricula(matricula:Matricula):Promise<Matricula>{
        return await MatriculaRepository.save(matricula);
    }
    public async listMatricula():Promise<Matricula[]>{
        return await MatriculaRepository.find();
    }
    public async findMatriculaById(id_matricula:string):Promise<Matricula|any>{
        const response = await MatriculaRepository.findOneBy({id_matricula});
        if(response == null){
            return {erro:"id não existente !"}
        }
        return response
    }
    public async deleteMatricula(id_matricula:string):Promise<{ success: string }>{
        await MatriculaRepository.delete(id_matricula);
        return {success: "matricula apagada com sucesso"}
    }
   //sem update
}