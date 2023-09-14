import "reflect-metadata";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Aluno from "./Aluno";
import Disciplina from './Disciplina';
import Turma from "./Turma";

@Entity()
class Frequencia {
        @PrimaryGeneratedColumn({name: 'id_frequencia'})
        id: number;
        
        @ManyToOne(() => Turma, (turma) => turma.id)
        @JoinColumn({ name: 'id_turma', referencedColumnName: 'id' })
        id_turma: number;

        @ManyToOne(() => Aluno, (aluno) => aluno.rm)
        @JoinColumn({ name: 'rm', referencedColumnName: 'rm' })
        rm: number;

        @ManyToOne(() => Disciplina, (disciplina) => disciplina.id)
        @JoinColumn({ name: 'id_disciplina', referencedColumnName: 'id_disciplina' })
        id_disciplina: number;

        @Column()
        ano: number;

        @Column()
        semestre: string;
}

export default Frequencia;