import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Aluno from "./Aluno";
import Disciplina from "./Disciplina";
import Turma from "./Turma";
import { v4 } from "uuid";
import Aula from "./Aula";
import ProfessorDisciplina from "./ProfessorDisciplina";
v4();

@Entity()
class Frequencia {
  @PrimaryGeneratedColumn('uuid')
  id_frequencia: string;

  @ManyToOne(() => Aula, (aula) => aula.id_aula)
  @JoinColumn({ name: "id_aula", referencedColumnName: "id_aula" })
  id_aula: string;

  @ManyToOne(() => ProfessorDisciplina, (profDisciplina) => profDisciplina.professor_disciplina)
  @JoinColumn({ name: "professor_disciplina", referencedColumnName: "professor_disciplina" })
  professor_disciplina: string;
/*
  @ManyToOne(() => Disciplina, (disciplina) => disciplina.id_disciplina)
  @JoinColumn({ name: "id_disciplina", referencedColumnName: "id_disciplina" })
  id_disciplina: string;
  */
 /*@ManyToOne(() => Turma, (turma) => turma.id_turma)
  @JoinColumn({ name: "id_turma", referencedColumnName: "id_turma" })
  id_turma: string;*/


  @ManyToOne(() => Aluno, (aluno) => aluno.rm)
  @JoinColumn({ name: "rm", referencedColumnName: "rm" })
  rm: number;

  @Column()
  frequencia: Boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}

export default Frequencia;