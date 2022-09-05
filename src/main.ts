import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { HttpExceptionFilter } from "./common/exceptions/http-exception.filter";
// import { ErrorInterceptor } from "./common/interceptors/error.interceptor";
// import { GlobalValidationPipe } from "./common/pipes/global-validation.pipe";
import { AppConfigService } from './config/app-config.service';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const conf: AppConfigService = app.get(AppConfigService);

  app.setGlobalPrefix('api');
  app.enableVersioning();
  // app.useGlobalPipes(new GlobalValidationPipe({ transform: true }));
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalInterceptors(new ErrorInterceptor());

  if (conf.env !== 'production') {
    setupSwagger(app);
  }

  await app.listen(conf.port);
}

bootstrap().catch((err) => {
  console.log(err);
});
