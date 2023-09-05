import "reflect-metadata";
import { Column, Entity, PrimaryColumn, CreateDateColumn,UpdateDateColumn  } from "typeorm";

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
            @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
            public created_at: Date;

            @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
            public updated_at: Date;
}

export default User;