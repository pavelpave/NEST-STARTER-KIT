import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle("FIT APP")
    .setDescription("All fit app api description")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);
}
