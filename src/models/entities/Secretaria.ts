import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
class Secretaria{
  @PrimaryColumn()
  id_secretaria: number
  @Column()
  nome: string
  @Column()
  email: string
  @Column()
  senha: string
}
export default Secretaria;