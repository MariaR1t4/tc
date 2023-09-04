import "reflect-metadata";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
class Disciplina{
        @PrimaryColumn()
        id_disciplina: number;
        @Column()
        descricao: string;
}

export default Disciplina;