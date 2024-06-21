import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthController } from './auth.controller';
import { MateriaModule } from '../models/materia/materia.module';
import { AlunoModule } from '../models/aluno/aluno.module';

@Module({
  providers: [AuthService],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    forwardRef(() => MateriaModule),
    PrismaModule,
    AlunoModule
  ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}