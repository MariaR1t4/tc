import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Turma from "./Turma";
import Disciplina from './Disciplina';
import Professor from "./Professor";
import { v4 } from "uuid";

v4();

@Entity()
class ProfessorDisciplina{
  @PrimaryGeneratedColumn('uuid')
  professor_disciplina: string;

  @Column()
  carga_horaria: number;

  @ManyToOne(() => Disciplina, (disciplina) => disciplina.id_disciplina)
  @JoinColumn({ name: 'id_disciplina', referencedColumnName: 'id_disciplina' })
  id_disciplina: string;

  @ManyToOne(() => Turma, (turma) => turma.id_turma)
  @JoinColumn({ name: 'id_turma', referencedColumnName: 'id_turma' })
  id_turma: string;

  @ManyToOne(() => Professor, (professor) => professor.id_professor)
  @JoinColumn({ name: 'id', referencedColumnName: 'id_professor' })
  id_professor: string;
  
}
export default ProfessorDisciplina