import "reflect-metadata";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Professor{
        @PrimaryGeneratedColumn("increment") 
        id_professor: number;
        @Column()
        name: string;
        @Column()
        telefone: string;
        @Column()
        email: string;
        @Column()
        senha: string;
}
export default Professor

