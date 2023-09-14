import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Disciplina{
        @PrimaryGeneratedColumn()
        id_disciplina: number;

        @Column()
        descricao: string;
}

export default Disciplina;