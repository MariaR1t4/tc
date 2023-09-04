import "reflect-metadata";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

uuidv4();
@Entity()
class Professor{
        @PrimaryColumn()
        id_tabela_professor: number;
        @Column()
        name: string;
        @Column()
        telefone: string;
        @Column()
        email: string;
        @Column()
        password: string;
}
export default Professor;

