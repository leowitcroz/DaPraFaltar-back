import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MateriaService } from './materia.service';

@Controller('materia')
export class MateriaController {

    constructor(private readonly materia: MateriaService) { }

    @Get() 
    async read(@Body() aluno_id) {
        return this.materia.readAll(aluno_id)
    }

    @Post('/aluno')
    async createAluno(@Body() { name, password }) {
        return this.materia.createAluno({ name, password })
    }

    @Post('/materias')
    async createMateria(@Body() { aluno_id, nome, horas, faltas }) {
        return this.materia.createMateira({ aluno_id, nome, horas, faltas })
    }

    // @Delete(':id')
    // async delete(@Param('id', ParseIntPipe) id) {
    //     return this.materia.delete(id);
    // }

    // @Patch(':id') 
    // async update(@Param('id', ParseIntPipe) id, @Body() { name, horas, faltas }) {
    //     return this.materia.update(id, { name, horas, faltas })
    // }


} 
