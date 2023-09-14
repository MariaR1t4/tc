import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Aluno {
  @PrimaryGeneratedColumn()
  rm: number;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  senha: string;
  @Column()
  ImageUrl: string;
  @Column()
  telefone: string;
}
export default Aluno;