import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 } from "uuid";
import Usuario from "./Usuario";
v4();

@Entity()
class Secretaria {
  @PrimaryGeneratedColumn("uuid")
  id_secretaria: string;

  @Column()
  nome: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  usuario: Usuario;

  @Column()
  cpf: string;

  @Column({ nullable: true })
  imageUrl: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
export default Secretaria;
