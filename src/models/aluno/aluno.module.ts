import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  providers: [AlunoService],
  controllers:[AlunoController,],
  imports:[PrismaModule],
  exports:[AlunoService]
})
export class AlunoModule {}
