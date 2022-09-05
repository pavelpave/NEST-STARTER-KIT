import { Global } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Global()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get env(): string {
    return this.configService.get<string>("NODE_ENV");
  }

  get port(): number {
    return this.configService.get<number>("PORT");
  }

  get secretKey(): string {
    return this.configService.get<string>("SECRET_KEY");
  }

  get secretKeyExpiresIn(): number {
    return Number(this.configService.get<number>("SECRET_EXPIRES_IN"));
  }

  get refreshSecretKey(): string {
    return this.configService.get<string>("REFRESH_SECRET_KEY");
  }

  get refreshExpiresIn(): number {
    return Number(this.configService.get<number>("REFRESH_SECRET_EXPIRES_IN"));
  }

  get dbHost(): string {
    return this.configService.get<string>("POSTGRES_HOST");
  }

  get dbPort(): number {
    return Number(this.configService.get<number>("POSTGRES_PORT"));
  }

  get dbUsername(): string {
    return this.configService.get<string>("POSTGRES_USER");
  }

  get dbPassword(): string {
    return this.configService.get<string>("POSTGRES_PASSWORD");
  }

  get dbName(): string {
    return this.configService.get<string>("POSTGRES_DB");
  }

  get amqpUri(): string {
    return this.configService.get<string>("AMQP_URI");
  }

  get messageCollectorUrl(): string {
    return this.configService.get<string>("MESSAGE_COLLECTOR_URL");
  }

  get messageCollectorLogin(): string {
    return this.configService.get<string>("MESSAGE_COLLECTOR_LOGIN");
  }

  get messageCollectorPassword(): string {
    return this.configService.get<string>("MESSAGE_COLLECTOR_PASSWORD");
  }

  get mobileStoUrl(): string {
    return this.configService.get<string>("MOBILE_STO_URL");
  }

  get mobileStoLogin(): string {
    return this.configService.get<string>("MOBILE_STO_LOGIN");
  }

  get mobileStoPassword(): string {
    return this.configService.get<string>("MOBILE_STO_PASSWORD");
  }
}
