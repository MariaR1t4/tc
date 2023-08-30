import "reflect-metadata";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
    class User{
            @PrimaryColumn()
            randomNumber: number;
            @Column()
            name: string;
            @Column()
            email: string;
            @Column()
            password: string;
            @Column()
            telefone: string;
}

export default User;