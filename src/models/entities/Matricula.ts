import "reflect-metadata";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Aluno from "./Aluno";
import Disciplina from './Disciplina';
import Turma from "./Turma";

@Entity()
class Frequencia {
        @PrimaryGeneratedColumn()
        id_frequencia: number;
        
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