import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    ConfigService,
  ],
  controllers: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppModule {}
