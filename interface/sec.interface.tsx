import { Entity } from "typeorm";

@Entity 
export class secretaria{

    @PrimaryColumn
    id: String

    @Column
    name: String

    @Column
    email: String

    @Column
    password: String
}