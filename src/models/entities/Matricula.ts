import "reflect-metadata";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Aluno from "./Aluno";
import Disciplina from './Disciplina';
import Turma from "./Turma";
import { v4 } from "uuid";

v4();

@Entity()
class Frequencia {
        @PrimaryGeneratedColumn('uuid') 
        id_frequencia: string;
        
        @ManyToOne(() => Turma, (turma) => turma.id_turma)
        @JoinColumn({ name: 'id_turma', referencedColumnName: 'id_turma' })
        id_turma: number;

        @ManyToOne(() => Aluno, (aluno) => aluno.rm)
        @JoinColumn({ name: 'rm', referencedColumnName: 'rm' })
        rm: number;

        @Column()
        ano: number;

        @Column()
        semestre: string;
}

export default Frequencia;