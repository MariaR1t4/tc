import "reflect-metadata";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Aluno from "./Aluno";
import Disciplina from './Disciplina';

@Entity()
class Frequencia {
        @PrimaryGeneratedColumn({name:'id_frequencia'})
        id: number;

        @Column()
        lista_chamada: number;

        @ManyToOne(() => Aluno, (aluno) => aluno.rm)
        @JoinColumn({ name: 'rm', referencedColumnName: 'rm' })
        rm: number;

        @ManyToOne(() => Disciplina, (disciplina) => disciplina.id)
        @JoinColumn({ name: 'id_disciplina', referencedColumnName: 'id_disciplina' })
        id_disciplina: number;
}

export default Frequencia;