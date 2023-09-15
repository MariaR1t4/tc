import "reflect-metadata";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Aluno from "./Aluno";
import Disciplina from './Disciplina';
import Turma from "./Turma";

@Entity()
class Frequencia {
        @PrimaryGeneratedColumn("increment") 
        id_frequencia: number;

        @Column()
        lista_chamada: number;

        @ManyToOne(() => Aluno, (aluno) => aluno.rm)
        @JoinColumn({ name: 'rm', referencedColumnName: 'rm' })
        rm: number;

        @ManyToOne(() => Disciplina, (disciplina) => disciplina.id_disciplina)
        @JoinColumn({ name: 'id_disciplina', referencedColumnName: 'id_disciplina' })
        id_disciplina: number;

        @ManyToOne(() => Turma, (turma) => turma.id_turma)
        @JoinColumn({ name: 'id_turma', referencedColumnName: 'id_turma' })
        id_turma: number;
}


export default Frequencia;