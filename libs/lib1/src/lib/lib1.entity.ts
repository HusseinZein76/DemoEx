import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class libEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  CreatedAt: Date;
}
