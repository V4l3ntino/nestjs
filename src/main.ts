import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //habilita el mecanismo de validacion automática del DTO
  app.useGlobalPipes(
    new ValidationPipe({
      //Elimina automatimacénte cualquier propiedad que llegue por la url y no este en el DTO
      whitelist: true,
    })
  )
  
  await app.listen(3000);
}
bootstrap();
