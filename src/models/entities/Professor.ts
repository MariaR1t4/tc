import "reflect-metadata";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Professor{
        @PrimaryGeneratedColumn("increment") 
        id_professor: number;
        @Column()
        nome: string;
        @Column()
        telefone: string;
        @Column()
        email: string;
}
export default Professor

