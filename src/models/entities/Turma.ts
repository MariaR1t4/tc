import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 } from "uuid";
v4();

@Entity()
class Turma {
  @PrimaryGeneratedColumn('uuid')
  id_turma: string;

  @Column()
  curso: string;

  @Column()
  periodo: string;

  @Column()
  modulo: string;

  @Column()
  descricao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}

export default Turma;
