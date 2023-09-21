import Turma from "../models/entities/Turma";
import TurmaRepository from "../models/entities/repositories/TurmaRepository";


export default class TurmaService{
    private constructor(){

    }
    private static instance: TurmaService;
    public static getInstance(){
        if(!TurmaService.instance){
            TurmaService.instance = new TurmaService();
        };
        return TurmaService.instance;
    }
    public criaTurma(turma: Turma[]) {
        throw new Error('Turma não pôde ser criada');
    }
    public async saveTurma(obj: Turma):Promise<Turma>{
        console.log(obj);
        return await TurmaRepository.save(obj);

    }
    public async listTurma():Promise<Turma[]>{
        return await TurmaRepository.find();
    }
    public async findTurma(id_turma:number) : Promise<Turma | null> {
        return await TurmaRepository.findOneBy({id_turma}); 
    }
    public async deleteTurma(id_turma:number):Promise<void>{
        await TurmaRepository.delete(id_turma);
    }
    public async updateTurma(id_turma: number, turma:Turma):Promise<void>{
        const turmaAlterada = await TurmaRepository.findOneBy(({id_turma}));
        if(turmaAlterada){
            turmaAlterada.curso = turma.curso;
            turmaAlterada.periodo = turma.periodo;
            turmaAlterada.modulo = turma.modulo;
            turmaAlterada.descricao = turma.descricao;
            await TurmaRepository.save(turmaAlterada);
        }
        Promise.resolve();
    }
    
}
