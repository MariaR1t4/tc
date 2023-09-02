import "reflect-metadata";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
    class Turma{
            @PrimaryColumn()
            id_turma: number;
            @Column()
            curso: string;
            @Column()
            periodo: string;
            @Column()
            modulo: string;
            @Column()
            descricao: string;
}

export default Turma;