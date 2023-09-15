import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { nullable } from "zod/lib";



@Entity()
class Aluno {
  @PrimaryGeneratedColumn("increment") 
  rm: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column({'nullable': true})
  ImageUrl: string;

  @Column()
  telefone: string;
}
export default Aluno;