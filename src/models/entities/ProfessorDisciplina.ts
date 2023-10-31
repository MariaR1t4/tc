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

  @ManyToOne(() => Disciplina, (disciplina) => disciplina.id_disciplina)
  @JoinColumn({ name: "id_disciplina", referencedColumnName: "id_disciplina" })
  id_disciplina: string;

  @ManyToOne(() => Turma, (turma) => turma.id_turma)
  @JoinColumn({ name: "id_turma", referencedColumnName: "id_turma" })
  id_turma: string;

  @ManyToOne(() => Professor, (professor) => professor.id_professor)
  @JoinColumn({ name: "id_professor", referencedColumnName: "id_professor" })
  id_professor: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
export default ProfessorDisciplina;
