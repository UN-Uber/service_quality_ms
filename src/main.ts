import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Service Quality Microservice')
    .setDescription('The service quality API description')
    .setVersion('1.0')
    .addTag('User Controller')
    .addTag('Driver Controller')
    .addTag('Calification Controller')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
  
}
bootstrap();
