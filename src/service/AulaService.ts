import Aula from "../models/entities/Aula";
import AulaRepository from "../models/entities/repositories/AulaRepository";
import generateToken from "../models/generateToken";


export default class AulaService{
    private constructor(){

    }
    
    private static instance: AulaService;
    public static getInstance(){
      if(this.instance) return this.instance;
      else return new AulaService();
      
  }

  
      
    public async saveAula(aula: Aula):Promise<Aula>{
      try{
        const newAula = new Aula();
        const token = await generateToken()

        newAula.id_aula = token;
        newAula.professor_disciplina = aula.professor_disciplina;
        newAula.descricao = aula.descricao;
  
        const saveAula = await AulaRepository.save(newAula);
        return Promise.resolve(saveAula);
      } catch (err) {
        console.log("erro");
        return Promise.reject(err);

    }
    }
    public async listAula(){
        const res =  await AulaRepository.find();

        const mapRes = res.map(res => ({
            id: res.id_aula,
            description: res.descricao,
            nomeProfessor: res.professor_disciplina.id_professor.nome,
            nomeDisciplina: res.professor_disciplina.id_disciplina.descricao,
            nomeAula: res.professor_disciplina.id_turma.descricao,
        }));
        
        
        return mapRes
        

    }
    public async findAulaById(id_aula:string) : Promise<Aula | null> {
        return await AulaRepository.findOneBy({id_aula}); 
    }
    public async deleteAula(id_aula:string):Promise<void>{
        await AulaRepository.delete(id_aula);
    }
    public async updateAula(id_aula: string, aula:Aula):Promise<void>{
        const aulaAlterada = await AulaRepository.findOneBy({id_aula});
        if(aulaAlterada){
            await AulaRepository.save(aulaAlterada);
        }else{
            console.log('aula nao encontrada')
        }
        Promise.resolve();
    }
}
