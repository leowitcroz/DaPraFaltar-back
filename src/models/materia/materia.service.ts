import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { alunos } from '@prisma/client';

@Injectable()
export class MateriaService {

    constructor(private readonly prisma: PrismaService,
    ) { }

    async readAll(aluno_id) {


        const aluno = this.findAluno(aluno_id);

        return this.prisma.materias.findMany({
            where: {
                aluno_id: (await aluno).id
            }
        })
    }


    async createMateira({ nome, horas, faltas }, aluno_id) {
        const aluno = this.findAluno(aluno_id)

        return await this.prisma.materias.create({
            data: {
                aluno_id: (await aluno).id,
                nome: nome,
                horas: horas,
                faltas: faltas,
            }
        })


    }

    async delete(aluno_id, id_) {

        const aluno = this.findAluno(aluno_id);

        return this.prisma.materias.delete({
            where: {
                aluno_id: (await aluno).id,
                idmaterias: id_
            }
        })
    }

    async findAluno(aluno_id): Promise<alunos> {
        const aluno = await this.prisma.alunos.findUnique({
            where: {
                id: aluno_id
            }
        })
        if (!aluno) {
            throw new Error(`Aluno com ID ${aluno_id} não encontrado.`);
        }
        else {
            return aluno;
        }
    }

    async update(id_materia, aluno_id, { nome, horas, faltas }) {

        const aluno = this.findAluno(aluno_id)

        const data: any = {}

        if (nome) {
            data.nome = nome;
        }
        if (horas) {
            data.horas = horas
        }
        if (faltas) {
            data.faltas = faltas
        }

        return this.prisma.materias.update({
            data,
            where: {
                aluno_id: (await aluno).id,
                idmaterias: id_materia,
            },

        })
    }

}
