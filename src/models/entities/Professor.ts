import "reflect-metadata";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 } from "uuid";
v4();

@Entity()
class Professor {
  @PrimaryGeneratedColumn("uuid")
  id_professor: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;
  
  @Column()
  senha: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
export default Professor;
