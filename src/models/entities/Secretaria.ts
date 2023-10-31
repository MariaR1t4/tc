import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from "uuid";

v4();

@Entity()
class Secretaria{
  @PrimaryGeneratedColumn('uuid') 
  id_secretaria: string
  @Column()
  nome: string
  @Column()
  email: string
  @Column()
  senha: string
}
export default Secretaria;