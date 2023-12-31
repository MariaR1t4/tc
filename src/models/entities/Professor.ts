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
import { type } from "os";
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
  usuario: Usuario;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
export default Professor;
