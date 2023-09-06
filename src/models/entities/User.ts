import "reflect-metadata";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
    class User{
            @PrimaryColumn()
            randomNumber: number;
            @Column()
            email: string;
            @Column()
            password: string;
            @Column()
            token: string
            @Column({nullable: true})
            ImageUrl: string
        }

export default User;