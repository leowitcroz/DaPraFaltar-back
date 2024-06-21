import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class MateriaService {

    constructor(private readonly prisma: PrismaService,
    ) { }

    async readAll( aluno_id ) {


        const aluno = await this.prisma.alunos.findUnique({
            where: {
                id: aluno_id
            }
        })
        if (!aluno) {
            throw new Error(`Aluno com ID ${aluno_id} não encontrado.`);
        }

        return this.prisma.materias.findMany({
            where: {
                aluno_id: aluno.id
            }
        })
    }


    async createMateira({nome, horas, faltas }, aluno_id) {
        const aluno = await this.prisma.alunos.findUnique({
            where: {
                id: Number(aluno_id)
            }
        })
        if (!aluno) {
            throw new Error(`Aluno com ID ${aluno_id} não encontrado.`);
        }

        return await this.prisma.materias.create({
            data: {
                aluno_id: aluno.id,
                nome: nome,
                horas: horas,
                faltas: faltas,
            }
        })


    }

    async delete(aluno_id,id_) {

        const aluno = await this.prisma.alunos.findUnique({
            where: {
                id: aluno_id
            }
        })
        if (!aluno) {
            throw new Error(`Aluno com ID ${aluno_id} não encontrado.`);
        }


        return this.prisma.materias.delete({
            where: {
                aluno_id: aluno.id,
                idmaterias: id_
            }
        })
    }

    // async update(id, { name, horas, faltas }) {

    //     const data: any = {}

    //     if (name) {
    //         data.name = name;
    //     }
    //     if (horas) {
    //         data.horas = horas
    //     }
    //     if (faltas) {
    //         data.faltas = faltas
    //     }

    //     return this.prisma.aluno.update({
    //         data,
    //         where: {
    //             id
    //         },

    //     })
    // }

}
