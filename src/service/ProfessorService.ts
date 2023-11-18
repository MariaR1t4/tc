import Professor from "../models/entities/Professor";
import ProfessorRepository from "../models/entities/repositories/ProfessorRepository";


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
    public async saveProfessor(obj: Professor):Promise<Professor>{
        return await ProfessorRepository.save(obj);
    }
    public async listProfessor():Promise<Professor[]>{
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
    
}
