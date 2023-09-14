import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Turma from "./Turma";
import Disciplina from './Disciplina';
import Professor from "./Professor";

@Entity()
class ProfessorDisciplina{
  @PrimaryGeneratedColumn({name: 'id_professor_disciplina'})
  id: number;

  @Column()
  carga_horaria: number;

  @ManyToOne(() => Disciplina, (disciplina) => disciplina.id)
  @JoinColumn({ name: 'id_disciplina', referencedColumnName: 'id_disciplina' })
  id_disciplina: number;

  @ManyToOne(() => Turma, (turma) => turma.id)
  @JoinColumn({ name: 'id_turma', referencedColumnName: 'id_turma' })
  id_turma: number;

  @ManyToOne(() => Professor, (professor) => professor.id)
  @JoinColumn({ name: 'id', referencedColumnName: 'id_professor' })
  id_professor: number;
  
}
export default ProfessorDisciplina