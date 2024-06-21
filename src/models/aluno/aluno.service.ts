import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AlunoService {

    constructor(private readonly prisma: PrismaService,
    ) { }


    async createAluno({ email, password }) {
        return this.prisma.alunos.create(
            {
                data: {
                    email: email,
                    password: password
                }
            }
        );
    }

    async readOne(id) {
        return this.prisma.alunos.findUnique({
            where:{
                id: Number(id)
            }
        })
    }


}
