import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: "postgres",
      host: this.configService.get("database.host"),
      port: this.configService.get("database.port"),
      database: this.configService.get("database.name"),
      username: this.configService.get("database.username"),
      password: this.configService.get("database.password"),
      autoLoadEntities: true,
      synchronize: false,
    };
  }
}
