import ProfessorDisciplina from "../models/entities/ProfessorDisciplina";
import ProfessorDisciplinaRepository from "../models/entities/dtos/repositories/ProfessorDisciplinaRepository";


export default class ProfessorDisciplinaService{
    private constructor(){

    }
    criaProfessorDisciplina(professorDisciplina: ProfessorDisciplina[]) {
        throw new Error('Não foi criado');
    }
    private static instance: ProfessorDisciplinaService;
    public static getInstance(){
        if(!ProfessorDisciplinaService.instance){
            ProfessorDisciplinaService.instance = new ProfessorDisciplinaService();
        };
        return ProfessorDisciplinaService.instance;
    }
    public async saveProfessorDisciplina(obj: ProfessorDisciplina):Promise<ProfessorDisciplina>{
        return await ProfessorDisciplinaRepository.save(obj);
    }
    public async listProfessorDisciplina() : Promise <ProfessorDisciplina[] | null> {
      return await ProfessorDisciplinaRepository.find();
    }
    public async findProfessorDisciplina(professor_disciplina:number) : Promise<ProfessorDisciplina | null> {
        return await ProfessorDisciplinaRepository.findOneBy({professor_disciplina}); 
    }
    public async deleteProfessorDisciplina(professor_disciplina:number):Promise<void>{
      await ProfessorDisciplinaRepository.delete(professor_disciplina);
  }
    public async updateProfessorDisciplina(professor_disciplina: number, professorDisciplina:ProfessorDisciplina):Promise<void>{
      const professorDisciplinaAlterado = await ProfessorDisciplinaRepository.findOneBy(({professor_disciplina}));
      if(professorDisciplinaAlterado){
          professorDisciplinaAlterado.professor_disciplina = professorDisciplina.professor_disciplina;
          professorDisciplinaAlterado.id_turma = professorDisciplina.id_turma;
          professorDisciplinaAlterado.id_disciplina = professorDisciplina.id_disciplina;
          professorDisciplinaAlterado.id_tabela_professor = professorDisciplina.id_tabela_professor;
          professorDisciplinaAlterado.carga_horaria = professorDisciplina.carga_horaria;
          await ProfessorDisciplinaRepository.save(professorDisciplinaAlterado);
      }
       Promise.resolve();
  
      }
    }