import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppConfigService } from "./app-config.service";

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: ".env" })],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
