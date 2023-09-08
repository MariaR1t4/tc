import "reflect-metadata";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
    class Turma{
            @PrimaryGeneratedColumn()
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