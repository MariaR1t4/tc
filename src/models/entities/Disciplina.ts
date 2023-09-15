import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Disciplina{
        @PrimaryGeneratedColumn("increment") 
        id_disciplina: number;

        @Column()
        descricao: string;
}

export default Disciplina;