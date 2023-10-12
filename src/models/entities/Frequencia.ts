import "reflect-metadata";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Aluno from "./Aluno";
import Disciplina from './Disciplina';
import Professor from "./Professor";
import Turma from "./Turma";

@Entity()
class Aula {
        @PrimaryGeneratedColumn("increment") 
        id_aula: number;

        @ManyToOne(() => Professor, (professor) => professor.id_professor)
        @JoinColumn({ name: 'id_professor', referencedColumnName: 'id_professor' })
        id_professor: number;

        @ManyToOne(() => Aluno, (aluno) => aluno.rm)
        @JoinColumn({ name: 'rm', referencedColumnName: 'rm' })
        rm: number;

        @ManyToOne(() => Disciplina, (disciplina) => disciplina.id_disciplina)
        @JoinColumn({ name: 'id_disciplina', referencedColumnName: 'id_disciplina' })
        id_disciplina: number;

        @ManyToOne(() => Turma, (turma) => turma.id_turma)
        @JoinColumn({ name: 'id_turma', referencedColumnName: 'id_turma' })
        id_turma: number;

        @Column()
        descricao: string;

        @Column()
        token: number;

        @Column()
        token_aluno: number;
}


export default Aula;