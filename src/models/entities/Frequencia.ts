import "reflect-metadata";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
class Pessoa{
        @PrimaryColumn()
        id_freq: number;
        @Column()
        lista_chamada: number;
        @Column()
        id_turm: number;
        @Column()
        rm: number;
        @Column()
        frequecia: number;
}

export default Pessoa;