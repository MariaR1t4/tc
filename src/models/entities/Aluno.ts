import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
class Aluno {
  @PrimaryColumn()
  rm: number;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  senha: string;
  @Column()
  telefone: string;
}
export default Aluno;