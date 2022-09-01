import { Column, Entity } from "typeorm";

@Entity()
export class Task {
  @Column()
  Title: string;
  @Column()
  description: string;
}
