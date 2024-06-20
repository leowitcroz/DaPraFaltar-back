import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MateriaModule } from './materia/materia.module';
import { PrismaModule } from './prisma/prisma.module';
import { AlunoController } from './aluno/aluno.controller';
import { AlunoModule } from './aluno/aluno.module';

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