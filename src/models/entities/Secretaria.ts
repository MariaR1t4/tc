import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Secretaria{
  @PrimaryGeneratedColumn()
  id_secretaria: number
  @Column()
  nome: string
  @Column()
  email: string
  @Column()
  senha: string
}
export default Secretaria;