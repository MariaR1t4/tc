import "reflect-metadata";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Professor{
        @PrimaryGeneratedColumn()
        id_professor: number;
        @Column()
        name: string;
        @Column()
        telefone: string;
        @Column()
        email: string;
        @Column()
        password: string;
}
export default Professor

