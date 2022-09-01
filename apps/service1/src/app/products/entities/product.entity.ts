import { Column, Entity } from "typeorm";
import { BaseEntity } from "@demo/lib1";

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  price: number;
}
