import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Turma from "./Turma";
import Disciplina from './Disciplina';
import Professor from "./Professor";

@Entity()
class ProfessorDisciplina{
  @PrimaryGeneratedColumn("increment")
  professor_disciplina: number;

  @Column()
  carga_horaria: number;

  @ManyToOne(() => Disciplina, (disciplina) => disciplina.id_disciplina)
  @JoinColumn({ name: 'id_disciplina', referencedColumnName: 'id_disciplina' })
  id_disciplina: number;

  @ManyToOne(() => Turma, (turma) => turma.id_turma)
  @JoinColumn({ name: 'id_turma', referencedColumnName: 'id_turma' })
  id_turma: number;

  @ManyToOne(() => Professor, (professor) => professor.id_professor)
  @JoinColumn({ name: 'id', referencedColumnName: 'id_professor' })
  id_professor: number;
  
}
export default ProfessorDisciplina