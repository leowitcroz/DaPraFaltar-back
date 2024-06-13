import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MateriaController } from './materia/materia.controller';
import { MateriaModule } from './materia/materia.module';

@Module({
  imports: [MateriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
