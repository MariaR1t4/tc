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
import Turma from "./Turma";
import { v4 } from "uuid";
v4();

@Entity()
class Matricula {
  @PrimaryGeneratedColumn("uuid")
  id_matricula: string;

  @ManyToOne(() => Turma, (turma) => turma.id_turma)
  @JoinColumn({ name: "id_turma", referencedColumnName: "id_turma" })
  id_turma: string;

  @ManyToOne(() => Aluno, (aluno) => aluno.rm)
  @JoinColumn({ name: "rm", referencedColumnName: "rm" })
  rm: number;

  @Column()
  ano: number;

  @Column()
  semestre: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}

export default Matricula;
