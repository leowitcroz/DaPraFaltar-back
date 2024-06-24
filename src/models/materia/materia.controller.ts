import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { AuthGuard } from '../../guard/auth.Guard';
import { Aluno } from '../../decorator/aluno.decorator';
@Controller('materia')
@UseGuards(AuthGuard)
export class MateriaController {

    constructor(private readonly materia: MateriaService) { }


    @Get()
    async read(@Aluno() aluno) {
        return this.materia.readAll(aluno.id)
    }

    @Post()
    async createMateria(@Body() { nome, horas, faltas }, @Aluno() aluno) {
        return this.materia.createMateira({ nome, horas, faltas }, aluno.id)
    }


    @Post('me')
    async me(@Aluno() aluno) {
        return {
            aluno: aluno.id
        }
    }

    @Delete(':id')
    async delete(@Aluno() aluno, @Param('id', ParseIntPipe) id) {
        return this.materia.delete(aluno.id, id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id_materia, @Body() { nome, horas, faltas }, @Aluno() aluno) {
        return this.materia.update(id_materia, aluno.id, { nome, horas, faltas })
    }


} 
