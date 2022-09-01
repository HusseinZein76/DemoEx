import { Column, Entity } from "typeorm";

@Entity()
export class Product {
  @Column()
  name: string;
  @Column()
  price: number;
}
