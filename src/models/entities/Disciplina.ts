import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from "uuid";

v4();

@Entity()
class Disciplina{
        @PrimaryGeneratedColumn('uuid') 
        id_disciplina: string;

        @Column()
        descricao: string;
}

export default Disciplina;