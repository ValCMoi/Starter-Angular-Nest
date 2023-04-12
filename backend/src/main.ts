import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')

  const optionsSwagger = new DocumentBuilder()

  optionsSwagger
    .setTitle('API url of : '+process.env.PROJECT_NAME)
    .setDescription('You can find here all url of the api project here ')
    .build()

  const documentDoc = SwaggerModule.createDocument(app, optionsSwagger as any)
  SwaggerModule.setup('api', app, documentDoc)

  await app.listen(process.env.NEST_PORT_INIT ?? 3000);
}
bootstrap();
