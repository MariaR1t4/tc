import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { nullable } from "zod/lib";
import Usuario from "./Usuario";

@Entity()
class Aluno {
  @PrimaryGeneratedColumn('increment') 
  rm: number;

  @Column()
  nome: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  usuario: Usuario

  @Column()
  telefone: string;

}
export default Aluno;