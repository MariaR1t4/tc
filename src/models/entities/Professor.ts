import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { v4 } from "uuid";
import Usuario from "./Usuario";
v4();

@Entity()
class Professor {
  @PrimaryGeneratedColumn("uuid")
  id_professor: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  N: Usuario;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
export default Professor;
