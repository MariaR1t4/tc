import "reflect-metadata";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
class Frequencia{
        @PrimaryColumn()
        id_freq: number;
        @Column()
        lista_chamada: number;
        @Column()
        id_turma: number;
        @Column()
        rm: number;
        @Column()
        frequencia: number;
}

export default Frequencia;