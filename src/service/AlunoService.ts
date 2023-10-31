import Aluno from "../models/entities/Aluno";
import AlunoRepository from "../models/entities/repositories/AlunoRepository";

export default class AlunoService{
    private constructor(){

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
    
}
