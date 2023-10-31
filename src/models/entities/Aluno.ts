import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { nullable } from "zod/lib";
import Usuario from "./Usuario";

@Entity()
class Aluno {
  @PrimaryGeneratedColumn("increment")
  rm: number;

  @Column()
  nome: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  usuario: Usuario;

  @Column()
  telefone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
export default Aluno;
