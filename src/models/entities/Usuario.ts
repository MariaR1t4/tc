import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";


@Entity()
class Usuario {
  @PrimaryGeneratedColumn() 
  email: string;

  @Column({nullable: true})
  fcmToken: string;

  @Column({nullable: true})
  googleId: string;
  
  @Column({nullable: true})
  ImageUrl: string;

  @Column({nullable: true})
  tipo: string;
 
}
export default Usuario;