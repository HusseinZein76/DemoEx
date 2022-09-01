import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { environment } from "../environments/environment";
import { ProductsModule } from "./products/products.module";
import { TypeOrmConfigService } from "./typeorm-config.service";

@Module({
  imports: [
    ConfigModule.forRoot({ load: [() => environment], isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
