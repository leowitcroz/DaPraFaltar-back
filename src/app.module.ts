import { forwardRef, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AlunoController } from './models/aluno/aluno.controller';
import { AlunoModule } from './models/aluno/aluno.module';
import { MateriaModule } from './models/materia/materia.module';
import { PrismaModule } from './prisma/prisma.module';



@Module({
  imports: [
    PrismaModule,
    forwardRef(() => AuthModule),
    forwardRef(() =>  MateriaModule),
    AlunoModule,
   
  ],
  controllers: [AppController, AlunoController],
  providers: [AppService],
})
export class AppModule { }