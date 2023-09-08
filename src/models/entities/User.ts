import "reflect-metadata";
import { Column, Entity, PrimaryColumn, CreateDateColumn,UpdateDateColumn, PrimaryGeneratedColumn  } from "typeorm";

@Entity()
    class User{
            @PrimaryGeneratedColumn()
            randomNumber: number;

            @Column()
            email: string;

            @Column()
            password: string;

            @Column({nullable: true})
            ImageUrl: string
    
            @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
            public created_at: Date;

            @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
            public updated_at: Date;
}

export default User;