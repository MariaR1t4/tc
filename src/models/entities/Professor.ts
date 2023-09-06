import "reflect-metadata";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
class Professor{
        @PrimaryColumn()
        id_tabela_professor: number;
        @Column()
        name: string;
        @Column()
        telefone: string;
        @Column()
        email: string;
        @Column()
        password: string;
}
export default Professor

