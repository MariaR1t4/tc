import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { v4 } from "uuid";

import ProfessorDisciplina from "./ProfessorDisciplina";

v4();

@Entity()
class Aula {
  @PrimaryGeneratedColumn('uuid')
  id_aula: string;

  @ManyToOne(
    () => ProfessorDisciplina,
    (profDisciplina) => profDisciplina.professor_disciplina
  )
  @JoinColumn({
    name: "professor_disciplina",
    referencedColumnName: "professor_disciplina",
  })
  professor_disciplina: string;

  @Column({ name: "descricao" })
  descricao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
export default Aula;
