import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GaresController } from './gares/gares.controller';
import { ConfigModule } from '@nestjs/config';
import configurations from 'config/configurations';

@Module({
  imports: [ConfigModule.forRoot({ load: [configurations] })],
  controllers: [AppController, GaresController],
  providers: [AppService],
})
export class AppModule {}
