import "reflect-metadata";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import Aluno from "./Aluno";
import Disciplina from './Disciplina';

@Entity()
class Frequencia {
        @PrimaryColumn()
        id_frequencia: number;
        @Column()
        lista_chamada: number;
        @ManyToOne(() => Aluno, (aluno) => aluno.rm)
        @JoinColumn({ name: 'rm', referencedColumnName: 'rm' })
        rm: number;
        @ManyToOne(() => Disciplina, (disciplina) => disciplina.id_disciplina)
        @JoinColumn({ name: 'id_disciplina', referencedColumnName: 'id_disciplina' })
        id_disciplina: number;
}

export default Frequencia;