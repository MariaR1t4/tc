import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";
import { nullable } from "zod/lib";


@Entity()
class Usuario {
  @PrimaryColumn() 
  email: string;

  @Column()
  fcmToken: string;

  @Column({nullable: true})
  googleId: string;
  
  @Column({nullable: true})
  ImageUrl: string;

  @Column()
  tipo: string;
 
}
export default Usuario;