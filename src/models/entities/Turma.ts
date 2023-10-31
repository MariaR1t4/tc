import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from "uuid";
v4();

@Entity()
    class Turma{
            @PrimaryGeneratedColumn('uuid') 
            id_turma: string;
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