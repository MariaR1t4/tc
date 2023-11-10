import "reflect-metadata";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

import ProfessorDisciplina from "./ProfessorDisciplina";

@Entity()
class Aula {
  @PrimaryColumn({type: 'varchar'})
  id_aula:string

  @ManyToOne(() => ProfessorDisciplina, { nullable: false, eager: true })
  @JoinColumn()
  professor_disciplina: ProfessorDisciplina;

  @Column()
  descricao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
export default Aula;
