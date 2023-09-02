import TurmaRepositorie from "../models/entities/repositories/TurmaRepositorie";
import Turma from "../models/entities/Turma";


export default class TurmaService{
    private constructor(){

    }
    criaTurma(turma: Turma[]) {
        throw new Error('Turma was not implemented');
    }
    private static instance: TurmaService;
    //create a new instance
    public static getInstance(){
        if(!TurmaService.instance){
            TurmaService.instance = new TurmaService();
        };
        return TurmaService.instance;
    }
    //save a instance
    public async saveTurma(obj: Turma):Promise<Turma>{
        return await TurmaRepositorie.save(obj);
    }
    public async getTurmas():Promise<Turma[]>{
        return await TurmaRepositorie.find();
    }
    public async getTurmaById(id_turma:number) : Promise<Turma | null> {
        return await TurmaRepositorie.findOneBy({id_turma}); 
    }
    public async deleteTurmaById(id_turma:number):Promise<void>{
        await TurmaRepositorie.delete(id_turma);
    }
    public async updateTurmaById(id_turma: number, turma:Turma):Promise<void>{
        const TurmaNow = await TurmaRepositorie.findOneBy({id_turma});
        if(TurmaNow){
//            UserNow.rm = User.rm;
            TurmaNow.id_turma = turma.id_turma;
            TurmaNow.curso = turma.curso;
            TurmaNow.periodo = turma.periodo;
            TurmaNow.modulo = turma.modulo;
            TurmaNow.descricao = turma.descricao;
            await TurmaRepositorie.save(TurmaNow);
        }
        Promise.resolve();
    }
    
}
