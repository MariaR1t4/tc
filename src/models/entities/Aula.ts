import "reflect-metadata";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

import ProfessorDisciplina from "./ProfessorDisciplina";

@Entity()
class Aula {
  @PrimaryColumn({type: 'varchar'})
  id_aula:string

  /*@ManyToOne(() => Professor, (professor) => professor.id_professor)
  @JoinColumn({ name: "id_professor", referencedColumnName: "id_professor" })
  id_professor: string;

  @ManyToOne(() => Disciplina, (disciplina) => disciplina.id_disciplina)
  @JoinColumn({ name: "id_disciplina", referencedColumnName: "id_disciplina" })
  id_disciplina: string;

  @ManyToOne(() => Turma, (turma) => turma.id_turma)
  @JoinColumn({ name: "id_turma", referencedColumnName: "id_turma" })
  id_turma: string;*/

  @ManyToOne(() => ProfessorDisciplina, (profDisciplina) => profDisciplina.professor_disciplina)
  @JoinColumn({ name: "professor_disciplina", referencedColumnName: "professor_disciplina" })
  professor_disciplina: string;

  @Column({'name':'descricao'})
  descricao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
export default Aula;
