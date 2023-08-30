import "reflect-metadata";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
class Pessoa{
        @PrimaryColumn()
        id: number;
        @Column()
        email: string;
        @Column()
        password: string;
}

export default Pessoa;