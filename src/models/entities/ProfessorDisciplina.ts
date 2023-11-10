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
import Turma from "./Turma";
import Disciplina from "./Disciplina";
import Professor from "./Professor";
import { v4 } from "uuid";
v4();

@Entity()
class ProfessorDisciplina {
  @PrimaryGeneratedColumn("uuid")
  professor_disciplina: string;

  @Column()
  carga_horaria: number;

  @ManyToOne(() => Disciplina, { nullable: false, eager: true })
  @JoinColumn()
  id_disciplina: Disciplina;

  @ManyToOne(() => Turma,  { nullable: false, eager: true })
  @JoinColumn()
  id_turma: Turma;

  @ManyToOne(() => Professor, { nullable: false, eager: true })
  @JoinColumn()
  id_professor: Professor;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
export default ProfessorDisciplina;
