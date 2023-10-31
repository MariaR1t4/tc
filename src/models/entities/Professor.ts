import "reflect-metadata";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from "uuid";

v4();

@Entity()
class Professor{
        @PrimaryGeneratedColumn('uuid') 
        id_professor: string;
        @Column()
        nome: string;
        @Column()
        telefone: string;
        @Column()
        email: string;
}
export default Professor

