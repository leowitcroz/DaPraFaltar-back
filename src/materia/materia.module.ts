import { Module, forwardRef } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule) ],
  controllers: [MateriaController],
  providers: [MateriaService],
  exports:[MateriaService]
  
})
export class MateriaModule {}