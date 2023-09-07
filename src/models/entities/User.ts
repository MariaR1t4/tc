import "reflect-metadata";
import { Column, Entity, PrimaryColumn, CreateDateColumn,UpdateDateColumn  } from "typeorm";

@Entity()
    class User{
            @PrimaryColumn()
            randomNumber: number;
            @Column()
            email: string;
            @Column()
            password: string;
            @Column()
<<<<<<< HEAD
            token: string
            @Column({nullable: true})
            ImageUrl: string
        }
=======
            telefone: string;
            @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
            public created_at: Date;

            @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
            public updated_at: Date;
}
>>>>>>> 8e71852d88985ae45487ec3c01bac48c82ef3b07

export default User;