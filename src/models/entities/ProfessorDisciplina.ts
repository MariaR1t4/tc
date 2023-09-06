import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import Turma from "./Turma";
import Disciplina from './Disciplina';
import Professor from "./Professor";

@Entity()
class ProfessorDisciplina{
  @PrimaryColumn()
  professor_disciplina: number;
  @ManyToOne(() => Turma, (turma) => turma.id_turma)
  id_turma: number;
  @ManyToOne(() => Disciplina, (disciplina) => disciplina.id_disciplina)
  @JoinColumn({ name: 'id_disciplina', referencedColumnName: 'id_disciplina' })
  id_disciplina: number;
  @ManyToOne(() => Professor, (professor) => professor.id_tabela_professor)
  @JoinColumn({ name: 'id_tabela_professor', referencedColumnName: 'id_tabela_professor' })
  id_tabela_professor: number;
  @Column()
  carga_horaria: Date;
}
export default ProfessorDisciplina