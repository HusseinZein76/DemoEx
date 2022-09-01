import { Column, Entity } from "typeorm";
import { BaseEntity } from "@demo/lib1";

@Entity()
export class Task extends BaseEntity {
  @Column()
  Title: string;
  
  @Column()
  description: string;
}
