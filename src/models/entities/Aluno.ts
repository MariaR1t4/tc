import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { nullable } from "zod/lib";


@Entity()
class Aluno {
  @PrimaryGeneratedColumn() 
  rm: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  /*@Column()
  senha: string;*/

  @Column({'nullable': true})
  ImageUrl: string;

  @Column()
  telefone: string;

  @Column()
  googleId: string;

  @Column()
  fcmToken: string;
}
export default Aluno;