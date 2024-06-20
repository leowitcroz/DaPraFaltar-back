import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { MateriaModule } from '../materia/materia.module';
import { AuthController } from './auth.controller';
import { AlunoModule } from '../aluno/aluno.module';

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