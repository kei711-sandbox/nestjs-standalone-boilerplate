import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  Logger.log('NODE_ENV: ' + configService.get('nodeEnv', 'local'), 'bootstrap');

  await app.close();
}
bootstrap().catch(e => {
  throw e;
});
