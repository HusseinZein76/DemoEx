import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}
  findAll(): Observable<Product[]> {
    return from(this.productRepository.find());
  }
}
