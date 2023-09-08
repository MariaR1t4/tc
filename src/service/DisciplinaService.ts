import Disciplina from "../models/entities/Disciplina";
import DisciplinaRepository from "../models/entities/repositories/DisciplinaRepository";

export default class DisciplinaService{
    private constructor(){

    }
    criaDisciplina(disciplina: Disciplina[]) {
        throw new Error('Disciplina não foi criada');
    }
    private static instance: DisciplinaService;
    public static getInstance(){
        if(!DisciplinaService.instance){
            DisciplinaService.instance = new DisciplinaService();
        };
        return DisciplinaService.instance;
    }
    public async saveDisciplina(obj: Disciplina):Promise<Disciplina>{
        return await DisciplinaRepository.save(obj);
    }
    public async listDisciplina():Promise<Disciplina[]>{
        return await DisciplinaRepository.find();
    }
    public async findDisciplina(id_disciplina:number) : Promise<Disciplina | null> {
        return await DisciplinaRepository.findOneBy({id_disciplina}); 
    }
    public async deleteDisciplina(id_disciplina:number):Promise<void>{
        await DisciplinaRepository.delete(id_disciplina);
    }
    public async updateDisciplina(id_disciplina: number, disciplina:Disciplina):Promise<void>{
        const disciplinaAlterada = await DisciplinaRepository.findOneBy(({id_disciplina}));
        if(disciplinaAlterada){
            disciplinaAlterada.descricao = disciplina.descricao;
            await DisciplinaRepository.save(disciplinaAlterada);
        }
        Promise.resolve();
    }
    
}
