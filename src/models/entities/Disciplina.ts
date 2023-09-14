import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Disciplina{
        @PrimaryGeneratedColumn({name:'id_disciplina'})
        id: number;

        @Column()
        descricao: string;
}

export default Disciplina;