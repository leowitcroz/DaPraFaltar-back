import { Module, forwardRef } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { AuthModule } from '../../auth/auth.module';
import { AlunoModule } from '../aluno/aluno.module';

@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule), AlunoModule ],
  controllers: [MateriaController],
  providers: [MateriaService],
  exports:[MateriaService]
  
})
export class MateriaModule {}