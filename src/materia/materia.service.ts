import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MateriaService {

    constructor(private readonly prisma: PrismaService) { }

    async readAll() {
        return this.prisma.materias.findMany()
    }

    async create({ name, horas, faltas }) {
        return this.prisma.materias.create(
            {
                data: { name, horas, faltas }
            }
        );
    }

}
